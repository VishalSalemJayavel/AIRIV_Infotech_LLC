"use client";

import { useEffect, useRef } from "react";

interface HeroBackgroundProps {
  className?: string;
  compact?: boolean;
  blobX?: number; // 0.0–1.0 override for blob center x
}

const VERT = `
  attribute vec2 a_pos;
  void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

const FRAG = `
  precision highp float;
  uniform float uTime;
  uniform vec2  uRes;
  uniform vec2  uCenter;
  uniform float uScale;

  float smin(float a, float b, float k) {
    float h = clamp(0.5 + 0.5*(b-a)/k, 0.0, 1.0);
    return mix(b, a, h) - k*h*(1.0-h);
  }

  float sdSphere(vec3 p, float r) { return length(p) - r; }

  /* 9-sphere metaball — complex multi-lobe shape */
  float map(vec3 p, float t) {
    float d = sdSphere(p - vec3( sin(t*0.52)*0.72,  cos(t*0.41)*0.52,  0.00), 0.56);
    d = smin(d, sdSphere(p - vec3( cos(t*0.37)*0.58,  sin(t*0.73)*0.48,  sin(t*0.28)*0.32), 0.46), 0.68);
    d = smin(d, sdSphere(p - vec3( sin(t*0.61+2.1)*0.52, cos(t*0.58)*0.32, cos(t*0.44)*0.52), 0.42), 0.58);
    d = smin(d, sdSphere(p - vec3( cos(t*0.77+0.9)*0.62, sin(t*0.32+0.6)*0.62, sin(t*0.51)*0.22), 0.44), 0.65);
    d = smin(d, sdSphere(p - vec3( sin(t*0.46+3.2)*0.40, cos(t*0.65+1.1)*0.44, cos(t*0.68)*0.44), 0.36), 0.52);
    d = smin(d, sdSphere(p - vec3( cos(t*0.55+1.5)*0.48, sin(t*0.48+2.0)*0.52, sin(t*0.35)*0.38), 0.32), 0.46);
    return d;
  }

  vec3 calcNormal(vec3 p, float t) {
    vec2 e = vec2(0.001, 0.0);
    return normalize(vec3(
      map(p+e.xyy,t)-map(p-e.xyy,t),
      map(p+e.yxy,t)-map(p-e.yxy,t),
      map(p+e.yyx,t)-map(p-e.yyx,t)
    ));
  }

  void main() {
    vec2 center = uCenter;
    float scale  = uScale;
    vec2 uv = (gl_FragCoord.xy - center) / scale;

    vec3 ro = vec3(0.0, 0.0, 3.2);
    vec3 rd = normalize(vec3(uv, -1.0));

    float t = 0.0, hit = -1.0;
    for (int i = 0; i < 56; i++) {
      float d = map(ro + rd*t, uTime);
      if (d < 0.0006) { hit = t; break; }
      t += max(d * 0.60, 0.003);
      if (t > 10.0) break;
    }

    if (hit < 0.0) { gl_FragColor = vec4(0.0); return; }

    vec3 p = ro + rd * hit;
    vec3 n = calcNormal(p, uTime);
    vec3 v = -rd;

    vec3 L1 = normalize(vec3(-1.5,  2.0, 2.5));
    vec3 L2 = normalize(vec3( 1.8, -1.2, 2.0));

    float diff1 = max(dot(n, L1), 0.0);
    float diff2 = max(dot(n, L2), 0.0) * 0.25;

    vec3  H1    = normalize(L1 + v);
    float spec1 = pow(max(dot(n, H1), 0.0), 100.0);
    float spec2 = pow(max(dot(n, H1), 0.0),  22.0) * 0.28;

    float ndv     = max(dot(n, v), 0.0);
    float frMid   = pow(1.0 - ndv, 1.8);
    float frOuter = pow(1.0 - ndv, 3.2);
    float frEdge  = pow(1.0 - ndv, 6.0);

    float cavity = 0.25 + 0.75*(0.5 + 0.5*dot(n, normalize(vec3(0.0,1.0,1.0))));

    vec3 interior  = vec3(0.01, 0.04, 0.02);
    vec3 bodyLit   = vec3(0.04, 0.18, 0.08);
    vec3 rimSage   = vec3(0.12, 0.42, 0.20);
    vec3 rimForest = vec3(0.08, 0.52, 0.26);
    vec3 rimMint   = vec3(0.18, 0.68, 0.38);
    vec3 specCol   = vec3(0.50, 0.80, 0.55);

    vec3 col = interior * 0.15
             + bodyLit * (diff1 + diff2) * cavity
             + specCol  * spec1 * 2.0
             + vec3(0.18, 0.52, 0.28) * spec2
             + rimSage   * frMid   * 1.4
             + rimForest * frOuter * 2.0
             + rimMint   * frEdge  * 0.6;

    col += vec3(0.01, 0.08, 0.03) * (1.0 - cavity) * 0.6;

    float vign = 1.0 - smoothstep(1.05, 1.75, length(uv));

    gl_FragColor = vec4(col, vign);
  }
`;

function compileShader(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  return s;
}

export default function HeroBackground({ className = "", compact = false, blobX }: HeroBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const rafRef       = useRef<number>(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false });
    if (!gl) return;

    /* Compile program */
    const vert = compileShader(gl, gl.VERTEX_SHADER, VERT);
    const frag = compileShader(gl, gl.FRAGMENT_SHADER, FRAG);
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vert);
    gl.attachShader(prog, frag);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    /* Full-screen quad */
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uTime   = gl.getUniformLocation(prog, "uTime");
    const uRes    = gl.getUniformLocation(prog, "uRes");
    const uCenter = gl.getUniformLocation(prog, "uCenter");
    const uScale  = gl.getUniformLocation(prog, "uScale");

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    let start = performance.now();
    let visible = true;

    // Pre-compute stable uniform values — recalculated only on resize
    let cx = 0, cy = 0, sc = 0;

    function updateUniforms() {
      const defaultX = compact ? 0.78 : 0.50;
      cx = canvas!.width  * (blobX ?? defaultX);
      cy = canvas!.height * 0.50;
      sc = compact ? canvas!.height * 0.55 : canvas!.height * 0.80;
      gl!.uniform2f(uRes,    canvas!.width, canvas!.height);
      gl!.uniform2f(uCenter, cx, cy);
      gl!.uniform1f(uScale,  sc);
    }

    function resize() {
      const w = container!.offsetWidth;
      const h = container!.offsetHeight;
      canvas!.width  = w;
      canvas!.height = h;
      gl!.viewport(0, 0, w, h);
      updateUniforms();
    }
    resize();

    function draw() {
      rafRef.current = requestAnimationFrame(draw);
      if (!visible) return;
      const t = (performance.now() - start) * 0.001;
      gl!.clearColor(0, 0, 0, 0);
      gl!.clear(gl!.COLOR_BUFFER_BIT);
      gl!.uniform1f(uTime, t);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
    }
    draw();

    // Pause rendering when scrolled off-screen
    const vis = new IntersectionObserver(
      ([entry]) => { visible = entry.isIntersecting; },
      { threshold: 0 }
    );
    vis.observe(container);

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      vis.disconnect();
      gl.deleteProgram(prog);
    };
  }, [compact, blobX]);

  return (
    <div
      ref={containerRef}
      className={`hero-bg-container ${compact ? "hero-bg-compact" : "hero-bg-full"} ${className}`}
      style={{ background: compact
        ? "radial-gradient(ellipse at 78% 50%, #0D2218 0%, #070E09 55%, #000000 100%)"
        : "radial-gradient(ellipse at 50% 55%, #1A3D26 0%, #0D2218 40%, #060C08 75%, #000000 100%)" }}
    >
      {/* Ambient blobs — soft glow behind the metaball */}
      <div className="amb-blob amb-blob-1" aria-hidden="true"
        style={compact ? { top: '-10%', left: 'auto', right: '-5%' } : undefined} />
      <div className="amb-blob amb-blob-2" aria-hidden="true"
        style={compact ? { top: '20%', right: '10%', left: 'auto' } : undefined} />

      {/* WebGL metaball canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          pointerEvents: "none",
        }}
      />

      <div className="hero-bg-grid" aria-hidden="true" />
      <div className="hero-bg-fade" aria-hidden="true" />
    </div>
  );
}
