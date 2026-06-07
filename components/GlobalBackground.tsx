"use client";

import { useEffect, useRef, useCallback } from "react";

export default function GlobalBackground() {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const mouseRef   = useRef({ x: -1, y: -1 });
  const animRef    = useRef<number>(0);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const W   = window.innerWidth;
    const H   = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    const ctx = canvas.getContext("2d")!;
    ctx.scale(dpr, dpr);

    /* ── Particles ── */
    interface Particle {
      x: number; y: number;
      vx: number; vy: number;
      baseS: number; o: number; pulse: number;
    }
    const N = 50;
    const pts: Particle[] = [];
    for (let i = 0; i < N; i++) {
      pts.push({
        x: Math.random() * W,     y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        baseS: Math.random() * 1.2 + 0.3,
        o:     Math.random() * 0.18 + 0.05,
        pulse: Math.random() * Math.PI * 2,
      });
    }
    const CD = 120, CDSQ = CD * CD;

    /* ── Lerped cursor spotlight ── */
    let curX = W * 0.5, curY = H * 0.4;
    let spotO = 0;
    let t = 0;

    cancelAnimationFrame(animRef.current);

    function draw() {
      t++;
      const mx = mouseRef.current.x, my = mouseRef.current.y;

      /* lerp spotlight */
      if (mx > 0) {
        curX += (mx - curX) * 0.07;
        curY += (my - curY) * 0.07;
        spotO += (1 - spotO) * 0.055;
      } else {
        spotO += (0 - spotO) * 0.035;
      }

      ctx.clearRect(0, 0, W, H);

      /* ── Cursor spotlight ── */
      if (spotO > 0.004) {
        const sg = ctx.createRadialGradient(curX, curY, 0, curX, curY, Math.min(W, H) * 0.40);
        sg.addColorStop(0,    `rgba(0,130,255,${0.06 * spotO})`);
        sg.addColorStop(0.40, `rgba(0,90,210,${0.03 * spotO})`);
        sg.addColorStop(1,    `rgba(0,0,0,0)`);
        ctx.fillStyle = sg;
        ctx.fillRect(0, 0, W, H);
      }

      /* ── Move particles (attracted toward cursor) ── */
      for (let i = 0; i < N; i++) {
        const pt = pts[i];
        if (mx > 0) {
          const dx = mx - pt.x, dy = my - pt.y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 160 && d > 1) { pt.vx += (dx / d) * 0.012; pt.vy += (dy / d) * 0.012; }
        }
        pt.vx *= 0.997; pt.vy *= 0.997;
        pt.x  += pt.vx; pt.y  += pt.vy;
        if (pt.x < -20) pt.x = W + 20; if (pt.x > W + 20) pt.x = -20;
        if (pt.y < -20) pt.y = H + 20; if (pt.y > H + 20) pt.y = -20;
      }

      /* ── Connection lines ── */
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const dSq = dx * dx + dy * dy;
          if (dSq < CDSQ) {
            const alpha = 0.04 * (1 - Math.sqrt(dSq) / CD);
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(0,140,255,${alpha})`;
            ctx.lineWidth   = 0.5;
            ctx.stroke();
          }
        }
      }

      /* ── Dots ── */
      const tSlow = t * 0.005;
      for (let i = 0; i < N; i++) {
        const pt   = pts[i];
        const glow = 0.7 + Math.sin(tSlow * 2 + pt.pulse) * 0.3;
        const s    = pt.baseS * (0.85 + glow * 0.15);

        ctx.beginPath(); ctx.arc(pt.x, pt.y, s, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,140,255,${pt.o * glow})`; ctx.fill();

        ctx.beginPath(); ctx.arc(pt.x, pt.y, s * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,225,255,${pt.o * 0.4 * glow})`; ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    }
    draw();
  }, []);

  useEffect(() => {
    init();
    const onMove   = (e: MouseEvent) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    const onLeave  = ()              => { mouseRef.current = { x: -1, y: -1 }; };
    const onResize = ()              => { cancelAnimationFrame(animRef.current); init(); };
    window.addEventListener("mousemove",  onMove,   { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize",     onResize);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize",     onResize);
    };
  }, [init]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position:      "fixed",
        inset:         0,
        width:         "100%",
        height:        "100%",
        pointerEvents: "none",
        zIndex:        2,
        mixBlendMode:  "multiply",
      }}
    />
  );
}
