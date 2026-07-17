import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/lib/data/site";

// The full ScaleBridge Global logo (globe + interlocking "S"/"B" + arrow, with
// wordmark). The artwork is dark on transparency, so it sits on a light plate.
export function BrandMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex size-full flex-col items-center justify-center bg-white p-4 sm:p-10",
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
      <span className="mt-2 font-serif-display text-sm leading-snug font-bold whitespace-nowrap text-navy-950 italic sm:text-base">
        {site.tagline}
      </span>
    </div>
  );
}
