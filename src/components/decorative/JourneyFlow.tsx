"use client";

import { useState } from "react";
import type { ProcessStep } from "@/lib/data/services";
import { cn } from "@/lib/utils";

/**
 * Interactive process diagram: the step list and a hexagonal cycle share a
 * single "active" state, so hovering/focusing either one highlights both.
 */

// Vertices of a hexagon (clockwise from top) plus where each label sits.
const NODES = [
  { x: 200, y: 90, lx: 200, ly: 60, anchor: "middle" as const },
  { x: 286.6, y: 140, lx: 308, ly: 145, anchor: "start" as const },
  { x: 286.6, y: 240, lx: 308, ly: 245, anchor: "start" as const },
  { x: 200, y: 290, lx: 200, ly: 326, anchor: "middle" as const },
  { x: 113.4, y: 240, lx: 92, ly: 245, anchor: "end" as const },
  { x: 113.4, y: 140, lx: 92, ly: 145, anchor: "end" as const },
];

// Points of a small hexagon marker of radius `r` centred on (cx, cy).
function hexMarker(cx: number, cy: number, r: number) {
  return [
    [cx, cy - r],
    [cx + 0.866 * r, cy - 0.5 * r],
    [cx + 0.866 * r, cy + 0.5 * r],
    [cx, cy + r],
    [cx - 0.866 * r, cy + 0.5 * r],
    [cx - 0.866 * r, cy - 0.5 * r],
  ]
    .map(([x, y]) => `${x},${y}`)
    .join(" ");
}

export function JourneyFlow({ steps }: { steps: ProcessStep[] }) {
  const [active, setActive] = useState<number | null>(null);

  const nodes = steps.slice(0, NODES.length).map((step, i) => ({
    ...NODES[i],
    label: step.title,
    n: i + 1,
  }));

  const count = nodes.length;
  const clear = () => setActive(null);

  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr]">
      <ol className="space-y-1">
        {steps.map((step, i) => (
          <li
            key={step.title}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={clear}
            onFocus={() => setActive(i)}
            onBlur={clear}
            tabIndex={0}
            className={cn(
              "rounded-xl p-3 outline-none transition-colors duration-200",
              active === i
                ? "bg-white shadow-sm ring-1 ring-slate-200"
                : "hover:bg-white/60",
            )}
          >
            <h3 className="font-serif-display text-lg font-medium text-navy-950">
              {step.title}
            </h3>
            <p className="mt-1 text-base leading-relaxed text-justify text-navy-700/80">
              {step.description}
            </p>
          </li>
        ))}
      </ol>

      <div className="flex justify-center lg:justify-end">
        <svg
          viewBox="0 0 400 380"
          className="h-auto w-full max-w-xl"
          role="img"
          aria-label={`Journey: ${nodes.map((n) => n.label).join(", ")}`}
        >
          {/* Connecting loop — each edge highlights when a node it touches is active */}
          {nodes.map((node, i) => {
            const next = nodes[(i + 1) % count];
            const lit = active === i || active === (i + 1) % count;
            return (
              <line
                key={`edge-${node.label}`}
                x1={node.x}
                y1={node.y}
                x2={next.x}
                y2={next.y}
                strokeLinecap="round"
                className={cn(
                  "transition-all duration-300",
                  lit ? "stroke-gold-500" : "stroke-gold-500/30",
                )}
                strokeWidth={lit ? 2.5 : 1.5}
              />
            );
          })}

          {/* Center label — reflects the active step, or a resting title */}
          {active === null ? (
            <text
              textAnchor="middle"
              className="fill-navy-500 font-serif-display text-[15px] tracking-[0.12em] uppercase"
            >
              <tspan x={200} y={178}>
                Talent
              </tspan>
              <tspan x={200} y={196}>
                Acquisition
              </tspan>
              <tspan x={200} y={214}>
                Journey
              </tspan>
            </text>
          ) : (
            <text
              x={200}
              y={182}
              textAnchor="middle"
              dominantBaseline="central"
              className="fill-gold-700 font-serif-display text-[22px] font-medium transition-all duration-200"
            >
              {nodes[active].label}
            </text>
          )}
          {active !== null && (
            <text
              x={200}
              y={206}
              textAnchor="middle"
              dominantBaseline="central"
              className="fill-navy-500 text-[12px] tracking-[0.2em] uppercase"
            >
              {`Step ${active + 1} of ${count}`}
            </text>
          )}

          {nodes.map((node, i) => {
            const isActive = active === i;
            const dim = active !== null && !isActive;
            return (
              <g
                key={node.label}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={clear}
                onFocus={() => setActive(i)}
                onBlur={clear}
                tabIndex={0}
                role="button"
                aria-label={`${node.label}, step ${node.n} of ${count}`}
                className="cursor-pointer outline-none"
              >
                {/* Halo ring on the active node */}
                <polygon
                  points={hexMarker(node.x, node.y, 24)}
                  className={cn(
                    "fill-gold-500/15 transition-opacity duration-200",
                    isActive ? "opacity-100" : "opacity-0",
                  )}
                />
                <polygon
                  points={hexMarker(node.x, node.y, isActive ? 18 : 15)}
                  className={cn(
                    "transition-all duration-200",
                    dim ? "fill-gold-300" : "fill-gold-600",
                  )}
                />
                <text
                  x={node.x}
                  y={node.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="pointer-events-none fill-white text-[11px] font-semibold"
                >
                  {node.n}
                </text>
                <text
                  x={node.lx}
                  y={node.ly}
                  textAnchor={node.anchor}
                  dominantBaseline="central"
                  className={cn(
                    "pointer-events-none transition-all duration-200",
                    isActive
                      ? "fill-navy-950 text-[16px] font-semibold"
                      : dim
                        ? "fill-navy-500 text-[15px] font-medium"
                        : "fill-navy-900 text-[15px] font-medium",
                  )}
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
