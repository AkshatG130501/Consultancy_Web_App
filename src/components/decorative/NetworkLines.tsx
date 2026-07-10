import { cn } from "@/lib/utils";

const nodes = [
  { x: 60, y: 90 },
  { x: 180, y: 40 },
  { x: 300, y: 110 },
  { x: 420, y: 55 },
  { x: 520, y: 130 },
  { x: 260, y: 220 },
  { x: 110, y: 240 },
  { x: 400, y: 260 },
  { x: 540, y: 230 },
  { x: 20, y: 170 },
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 5],
  [5, 6],
  [5, 7],
  [7, 8],
  [0, 6],
  [6, 9],
  [2, 5],
];

export function NetworkLines({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 300"
      fill="none"
      className={cn("h-full w-full", className)}
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="currentColor"
          strokeOpacity="0.25"
          strokeWidth="1"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i % 3 === 0 ? 4 : 2.5}
          fill={i % 3 === 0 ? "var(--color-gold-400)" : "currentColor"}
          fillOpacity={i % 3 === 0 ? 1 : 0.6}
        />
      ))}
    </svg>
  );
}
