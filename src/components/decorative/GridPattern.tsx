import { cn } from "@/lib/utils";

export function GridPattern({ className }: { className?: string }) {
  return (
    <svg
      className={cn("absolute inset-0 h-full w-full", className)}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="grid-pattern"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  );
}
