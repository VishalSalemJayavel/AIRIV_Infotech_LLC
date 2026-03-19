"use client";

import { useEffect, useRef, useCallback } from "react";

interface HeroBackgroundProps {
  className?: string;
  compact?: boolean;
}

export default function HeroBackground({ className = "", compact = false }: HeroBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const siriRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1, y: -1 });
  const animRef = useRef<number>(0);

  const init = useCallback(() => {
    const container = containerRef.current;
    const cSiri = siriRef.current;
    const cPart = particlesRef.current;
    if (!container || !cSiri || !cPart) return;

    const W = container.offsetWidth;
    const H = container.offsetHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    cSiri.width = W * dpr; cSiri.height = H * dpr;
    const ctxS = cSiri.getContext("2d")!;
    ctxS.scale(dpr, dpr);

    cPart.width = W * dpr; cPart.height = H * dpr;
    const ctxP = cPart.getContext("2d")!;
    ctxP.scale(dpr, dpr);

    const orbs = [
      { cx: W*0.30, cy: H*0.40, baseR: Math.min(W,H)*0.52, color: [0,100,255]  as [number,number,number], o: 0.28, phase: 0,   orbitRx: 60,  orbitRy: 38, orbitSpeed: 0.0004, pulseSpeed: 0.0008, pulseAmp: 0.14 },
      { cx: W*0.68, cy: H*0.45, baseR: Math.min(W,H)*0.46, color: [0,170,255]  as [number,number,number], o: 0.22, phase: 2.0, orbitRx: 70,  orbitRy: 42, orbitSpeed: 0.0006, pulseSpeed: 0.001,  pulseAmp: 0.12 },
      { cx: W*0.48, cy: H*0.58, baseR: Math.min(W,H)*0.54, color: [0,60,200]   as [number,number,number], o: 0.20, phase: 4.0, orbitRx: 45,  orbitRy: 50, orbitSpeed: 0.0003, pulseSpeed: 0.0006, pulseAmp: 0.10 },
      { cx: W*0.58, cy: H*0.30, baseR: Math.min(W,H)*0.32, color: [0,201,167]  as [number,number,number], o: 0.20, phase: 1.0, orbitRx: 50,  orbitRy: 28, orbitSpeed: 0.0007, pulseSpeed: 0.0012, pulseAmp: 0.17 },
      { cx: W*0.35, cy: H*0.25, baseR: Math.min(W,H)*0.30, color: [50,130,240] as [number,number,number], o: 0.26, phase: 3.0, orbitRx: 30,  orbitRy: 36, orbitSpeed: 0.0009, pulseSpeed: 0.0015, pulseAmp: 0.20 },
    ];

    interface Particle {
      x: number; y: number; vx: number; vy: number;
      baseS: number; o: number; pulse: number;
    }

    const N = 100;
    const particles: Particle[] = [];
    for (let i = 0; i < N; i++) {
      particles.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.22,
        baseS: Math.random() * 2.2 + 0.6, o: Math.random() * 0.55 + 0.18,
        pulse: Math.random() * Math.PI * 2,
      });
    }
    const CD = 150, CDSQ = CD * CD;
    let t = 0;

    // Lerped cursor position for smooth spotlight
    let curX = W * 0.5, curY = H * 0.4;
    let spotOpacity = 0; // fades in when mouse enters

    function draw() {
      t += 1;

      // Smooth-follow the real mouse; fade in/out
      const mx = mouseRef.current.x, my = mouseRef.current.y;
      if (mx > 0) {
        curX += (mx - curX) * 0.07;
        curY += (my - curY) * 0.07;
        spotOpacity += (1 - spotOpacity) * 0.06;
      } else {
        spotOpacity += (0 - spotOpacity) * 0.04;
      }

      ctxS.clearRect(0, 0, W, H);
      orbs.forEach(orb => {
        const x = orb.cx + Math.cos(t * orb.orbitSpeed + orb.phase) * orb.orbitRx;
        const y = orb.cy + Math.sin(t * orb.orbitSpeed * 0.7 + orb.phase) * orb.orbitRy;
        const pulse = 1 + Math.sin(t * orb.pulseSpeed + orb.phase) * orb.pulseAmp;
        const r = orb.baseR * pulse;
        let fx = x, fy = y;
        if (mouseRef.current.x > 0) {
          const dx = mouseRef.current.x - x, dy = mouseRef.current.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 650) { const pull = 0.032 * (1 - dist / 650); fx = x + dx * pull; fy = y + dy * pull; }
        }
        const grad = ctxS.createRadialGradient(fx, fy, 0, fx, fy, r);
        grad.addColorStop(0, `rgba(${orb.color[0]},${orb.color[1]},${orb.color[2]},${orb.o})`);
        grad.addColorStop(0.25, `rgba(${orb.color[0]},${orb.color[1]},${orb.color[2]},${orb.o * 0.7})`);
        grad.addColorStop(0.5, `rgba(${orb.color[0]},${orb.color[1]},${orb.color[2]},${orb.o * 0.3})`);
        grad.addColorStop(0.75, `rgba(${orb.color[0]},${orb.color[1]},${orb.color[2]},${orb.o * 0.08})`);
        grad.addColorStop(1, `rgba(${orb.color[0]},${orb.color[1]},${orb.color[2]},0)`);
        ctxS.fillStyle = grad;
        ctxS.fillRect(0, 0, W, H);
      });

      // Cursor spotlight — large soft glow that follows the mouse
      if (spotOpacity > 0.005) {
        const sg = ctxS.createRadialGradient(curX, curY, 0, curX, curY, Math.min(W, H) * 0.55);
        sg.addColorStop(0,    `rgba(0,140,255,${0.22 * spotOpacity})`);
        sg.addColorStop(0.25, `rgba(0,100,220,${0.14 * spotOpacity})`);
        sg.addColorStop(0.55, `rgba(0,60,180,${0.06 * spotOpacity})`);
        sg.addColorStop(1,    `rgba(0,0,0,0)`);
        ctxS.fillStyle = sg;
        ctxS.fillRect(0, 0, W, H);

        // tight bright core right at cursor
        const cg = ctxS.createRadialGradient(curX, curY, 0, curX, curY, 80);
        cg.addColorStop(0, `rgba(120,200,255,${0.18 * spotOpacity})`);
        cg.addColorStop(1, `rgba(0,100,255,0)`);
        ctxS.fillStyle = cg;
        ctxS.fillRect(0, 0, W, H);
      }

      ctxP.clearRect(0, 0, W, H);
      const mx2 = mouseRef.current.x, my2 = mouseRef.current.y;
      for (let i = 0; i < N; i++) {
        const pt = particles[i]; let ax = 0, ay = 0;
        if (mx2 > 0) {
          const dx = mx2 - pt.x, dy = my2 - pt.y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < 180 && d > 1) { ax += (dx / d) * 0.02; ay += (dy / d) * 0.02; }
        }
        pt.vx += ax; pt.vy += ay; pt.vx *= 0.998; pt.vy *= 0.998;
        pt.x += pt.vx; pt.y += pt.vy;
        if (pt.x < -20) pt.x = W + 20; if (pt.x > W + 20) pt.x = -20;
        if (pt.y < -20) pt.y = H + 20; if (pt.y > H + 20) pt.y = -20;
      }
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
          const dSq = dx * dx + dy * dy;
          if (dSq < CDSQ) {
            const d = Math.sqrt(dSq), alpha = 0.14 * (1 - d / CD);
            ctxP.beginPath(); ctxP.moveTo(particles[i].x, particles[i].y);
            ctxP.lineTo(particles[j].x, particles[j].y);
            ctxP.strokeStyle = `rgba(0,119,255,${alpha})`; ctxP.lineWidth = 0.4; ctxP.stroke();
          }
        }
      }
      const tSlow = t * 0.005;
      for (let i = 0; i < N; i++) {
        const pt = particles[i], glow = 0.7 + Math.sin(tSlow * 2 + pt.pulse) * 0.3;
        const s = pt.baseS * (0.85 + glow * 0.15);
        ctxP.beginPath(); ctxP.arc(pt.x, pt.y, s * 3.5, 0, Math.PI * 2);
        ctxP.fillStyle = `rgba(0,119,255,${pt.o * 0.1 * glow})`; ctxP.fill();
        ctxP.beginPath(); ctxP.arc(pt.x, pt.y, s, 0, Math.PI * 2);
        ctxP.fillStyle = `rgba(0,119,255,${pt.o * glow})`; ctxP.fill();
        ctxP.beginPath(); ctxP.arc(pt.x, pt.y, s * 0.45, 0, Math.PI * 2);
        ctxP.fillStyle = `rgba(180,220,255,${pt.o * 0.5 * glow})`; ctxP.fill();
      }
      animRef.current = requestAnimationFrame(draw);
    }
    draw();
  }, []);

  useEffect(() => {
    init();
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;
      const r = container.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      if (x >= 0 && x <= r.width && y >= 0 && y <= r.height) {
        mouseRef.current = { x, y };
      } else {
        mouseRef.current = { x: -1, y: -1 };
      }
    };
    const handleMouseLeave = () => { mouseRef.current = { x: -1, y: -1 }; };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    const handleResize = () => { cancelAnimationFrame(animRef.current); init(); };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [init]);

  return (
    <div
      ref={containerRef}
      className={`hero-bg-container ${compact ? "hero-bg-compact" : "hero-bg-full"} ${className}`}
    >
      <canvas ref={siriRef} className="hero-bg-canvas" aria-hidden="true" />
      <canvas ref={particlesRef} className="hero-bg-particles" aria-hidden="true" />
      <div className="hero-bg-radial" aria-hidden="true" />
      <div className="hero-bg-fade" aria-hidden="true" />
      <div className="hero-bg-grid" aria-hidden="true" />
    </div>
  );
}
