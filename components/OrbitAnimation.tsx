"use client";

import { useEffect, useRef } from "react";

interface OrbitAnimationProps {
  size?: number;
  color?: [number, number, number];
}

export default function OrbitAnimation({
  size = 480,
  color = [0, 119, 255],
}: OrbitAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colorRef  = useRef<[number, number, number]>([...color]);
  const animRef   = useRef<number>(0);

  useEffect(() => { colorRef.current = [...color]; }, [color]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const S   = size;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width  = S * dpr;
    canvas.height = S * dpr;
    const ctx = canvas.getContext("2d")!;
    ctx.scale(dpr, dpr);
    const cx = S / 2, cy = S / 2;

    const rings = [
      { rx: S*0.40, ry: S*0.14, tilt:  12, speed: 0.014, dir:  1, phase: 0,              op: 0.60, lw: 1.5, dotR: S*0.019 },
      { rx: S*0.35, ry: S*0.12, tilt:  77, speed: 0.009, dir: -1, phase: Math.PI,         op: 0.42, lw: 1.2, dotR: S*0.016 },
      { rx: S*0.30, ry: S*0.11, tilt: -52, speed: 0.006, dir:  1, phase: Math.PI / 2,     op: 0.28, lw: 1.0, dotR: S*0.013 },
      { rx: S*0.23, ry: S*0.08, tilt:  35, speed: 0.018, dir: -1, phase: Math.PI * 1.5,   op: 0.20, lw: 0.8, dotR: S*0.010 },
    ];

    let t = 0;

    function draw() {
      const [r, g, b] = colorRef.current;

      ctx.clearRect(0, 0, S, S);

      // outer glow
      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, S * 0.38);
      grd.addColorStop(0, `rgba(${r},${g},${b},0.18)`);
      grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, S, S);

      rings.forEach((ring) => {
        const tiltRad = (ring.tilt * Math.PI) / 180;
        const angle   = ring.phase + t * ring.speed * ring.dir;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(tiltRad);

        // ring ellipse
        ctx.beginPath();
        ctx.ellipse(0, 0, ring.rx, ring.ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${r},${g},${b},${ring.op})`;
        ctx.lineWidth   = ring.lw;
        ctx.stroke();

        // dot position
        const dx = Math.cos(angle) * ring.rx;
        const dy = Math.sin(angle) * ring.ry;
        const dr = ring.dotR;

        // dot halo
        const halo = ctx.createRadialGradient(dx, dy, 0, dx, dy, dr * 3.5);
        halo.addColorStop(0, "rgba(255,255,255,0.35)");
        halo.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = halo;
        ctx.beginPath(); ctx.arc(dx, dy, dr * 3.5, 0, Math.PI * 2); ctx.fill();

        // dot core
        ctx.beginPath(); ctx.arc(dx, dy, dr, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.95)"; ctx.fill();

        // dot inner color
        ctx.beginPath(); ctx.arc(dx, dy, dr * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgb(${r},${g},${b})`; ctx.fill();

        ctx.restore();
      });

      // center sphere
      const sphereR = S * 0.155;
      ctx.beginPath(); ctx.arc(cx, cy, sphereR, 0, Math.PI * 2);
      ctx.fillStyle = "#000"; ctx.fill();
      ctx.strokeStyle = `rgba(${r},${g},${b},0.45)`; ctx.lineWidth = 1.5; ctx.stroke();

      // center inner glow
      const inner = ctx.createRadialGradient(cx, cy, 0, cx, cy, sphereR * 0.85);
      inner.addColorStop(0, `rgba(${r},${g},${b},0.28)`);
      inner.addColorStop(1, `rgba(${r},${g},${b},0.04)`);
      ctx.beginPath(); ctx.arc(cx, cy, sphereR * 0.85, 0, Math.PI * 2);
      ctx.fillStyle = inner; ctx.fill();

      t++;
      animRef.current = requestAnimationFrame(draw);
    }

    cancelAnimationFrame(animRef.current);
    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ width: size, height: size, display: "block", flexShrink: 0 }}
    />
  );
}
