import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/data/site";

function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={cn("h-8 w-8", className)}
      aria-hidden="true"
    >
      <path
        d="M20 6V29"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 34C4 34 10 29 20 29C30 29 36 34 36 34"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 8L7 29"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 8L14 29"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 8L26 29"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 8L33 29"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="20" cy="6" r="2.5" fill="var(--color-gold-500)" />
    </svg>
  );
}

const sizeStyles = {
  md: { gap: "gap-2.5", mark: "h-8 w-8", word: "text-lg", sub: "text-[0.6rem]" },
  lg: { gap: "gap-3", mark: "h-11 w-11", word: "text-2xl", sub: "text-xs" },
  xl: { gap: "gap-4", mark: "h-16 w-16", word: "text-4xl", sub: "text-sm" },
} as const;

export function Logo({
  className,
  markClassName,
  variant = "dark",
  size = "md",
}: {
  className?: string;
  markClassName?: string;
  variant?: "dark" | "light";
  size?: "md" | "lg" | "xl";
}) {
  const s = sizeStyles[size];
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center",
        s.gap,
        variant === "dark" ? "text-navy-950" : "text-cream-50",
        className,
      )}
    >
      <Mark className={cn(s.mark, markClassName)} />
      <span
        className={cn(
          "font-serif-display leading-none font-semibold tracking-tight",
          s.word,
        )}
      >
        {site.shortName}
        <span
          className={cn(
            "block font-sans font-medium tracking-[0.2em] text-gold-500 uppercase",
            s.sub,
          )}
        >
          Advisory
        </span>
      </span>
    </Link>
  );
}
