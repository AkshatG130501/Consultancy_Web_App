import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/lib/data/site";

const sizeStyles = {
  md: "h-10",
  lg: "h-14",
  xl: "h-20",
  "2xl": "h-24",
} as const;

// Tagline sizing tuned to each logo height so it reads as the strapline
// beneath the wordmark, matching the master logo artwork.
const taglineStyles = {
  md: "text-[11px]",
  lg: "text-xs",
  xl: "text-sm",
  "2xl": "text-base",
} as const;

export function Logo({
  className,
  size = "md",
  withTagline = true,
}: {
  className?: string;
  markClassName?: string;
  variant?: "dark" | "light";
  size?: "md" | "lg" | "xl" | "2xl";
  withTagline?: boolean;
}) {
  return (
    <Link href="/" className={cn("inline-flex flex-col items-center", className)}>
      <Image
        src="/logo.png"
        alt="ScaleBridge Global"
        width={630}
        height={396}
        priority
        className={cn("w-auto", sizeStyles[size])}
      />
      {withTagline && (
        <span
          className={cn(
            "mt-1 font-serif-display leading-snug font-bold whitespace-nowrap text-navy-950 italic",
            taglineStyles[size],
          )}
        >
          {site.tagline}
        </span>
      )}
    </Link>
  );
}
