import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/lib/data/site";

// The full ScaleBridge Global logo (globe + interlocking "S"/"B" + arrow, with
// wordmark). On the carousel it sits on a solid dark panel that matches the
// near-opaque navy on each slide's left edge, so the panel merges into the
// imagery. The dark logo artwork is rendered as a white silhouette to read.
export function BrandMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex size-full flex-col items-center justify-center bg-gray-300 p-4 sm:p-10",
        className,
      )}
    >
      <Image
        src="/logo.png"
        alt="ScaleBridge Global"
        width={630}
        height={396}
        priority
        sizes="340px"
        className="h-auto w-full max-w-[260px] object-contain"
      />
      <span className="mt-2 font-serif-display text-sm leading-snug font-bold whitespace-nowrap text-cream-50/90 italic drop-shadow sm:text-base">
        {site.tagline}
      </span>
    </div>
  );
}
