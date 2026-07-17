"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { cn } from "@/lib/utils";

type MarkerDef = {
  id: string;
  label: string;
  location: [number, number];
  size: number;
};

const MARKERS: MarkerDef[] = [
  { id: "nigeria", label: "Nigeria", location: [6.5, 3.4], size: 0.09 },
  { id: "kenya", label: "Kenya", location: [-1.3, 36.8], size: 0.09 },
  { id: "uae", label: "UAE", location: [25.2, 55.3], size: 0.09 },
  { id: "india", label: "India", location: [28.5, 77.1], size: 0.09 },
];

const INITIAL_PHI = 3.4;
const THETA = 0.32;
const MARKER_ELEVATION = 0.05;

// Mirrors cobe's internal projection so the HTML labels line up with the
// WebGL-rendered markers as the globe rotates (assumes a square canvas with
// default scale/offset, which is what we render here).
function toVec3([lat, lng]: [number, number]): [number, number, number] {
  const r = (lat * Math.PI) / 180;
  const a = (lng * Math.PI) / 180 - Math.PI;
  const o = Math.cos(r);
  return [-o * Math.cos(a), Math.sin(r), o * Math.sin(a)];
}

function project(location: [number, number], phi: number) {
  const scale = 0.8 + MARKER_ELEVATION;
  const [x, y, z] = toVec3(location).map((v) => v * scale) as [
    number,
    number,
    number,
  ];
  const cosTheta = Math.cos(THETA);
  const cosPhi = Math.cos(phi);
  const sinTheta = Math.sin(THETA);
  const sinPhi = Math.sin(phi);
  const c = cosPhi * x + sinPhi * z;
  const s = sinPhi * sinTheta * x + cosTheta * y - cosPhi * sinTheta * z;
  const visible =
    -sinPhi * cosTheta * x + sinTheta * y + cosPhi * cosTheta * z >= 0 ||
    c * c + s * s >= 0.64;
  return { xPct: ((c + 1) / 2) * 100, yPct: ((-s + 1) / 2) * 100, visible };
}

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let width = canvas.offsetWidth;
    const onResize = () => {
      width = canvas.offsetWidth;
      globe.update({ width: width * 2, height: width * 2 });
    };
    window.addEventListener("resize", onResize);

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: INITIAL_PHI,
      theta: THETA,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.878, 0.914, 0.949], // gold-100
      markerColor: [0.208, 0.396, 0.561], // gold-600
      glowColor: [0.663, 0.776, 0.878], // gold-300
      markers: MARKERS,
    });

    let phi = INITIAL_PHI;
    let frameId: number;
    const render = () => {
      phi += 0.0035;
      globe.update({ phi });

      for (const marker of MARKERS) {
        const el = labelRefs.current[marker.id];
        if (!el) continue;
        const { xPct, yPct, visible } = project(marker.location, phi);
        el.style.left = `${xPct}%`;
        el.style.top = `${yPct}%`;
        el.style.opacity = visible ? "1" : "0";
      }

      frameId = requestAnimationFrame(render);
    };
    frameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frameId);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className={cn("relative mx-auto aspect-square w-full max-w-md", className)}>
      <canvas ref={canvasRef} className="size-full contain-[layout_paint_size]" />

      {MARKERS.map((marker) => (
        <div
          key={marker.id}
          ref={(el) => {
            labelRefs.current[marker.id] = el;
          }}
          className="pointer-events-none absolute z-10 size-2.5 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-gold-500 opacity-75" />
          <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-full bg-white/95 px-2.5 py-1 text-xs font-medium whitespace-nowrap text-navy-800 shadow-sm ring-1 ring-navy-950/10">
            {marker.label}
          </span>
        </div>
      ))}
    </div>
  );
}
