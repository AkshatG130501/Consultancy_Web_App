import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/lib/data/site";

// The full Vertex logo (circled "V" + rising arrow, with wordmark). On the
// carousel it sits on a solid light panel that matches each slide's left edge,
// so the panel merges into the imagery.
export function BrandMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex size-full flex-col items-center justify-center bg-gray-300 p-4 sm:p-6 xl:p-10",
        className,
      )}
    >
      <Image
        src="/logo.png"
        alt="Vertex Business Consulting"
        width={645}
        height={387}
        priority
        sizes="340px"
        className="h-auto w-full max-w-[260px] object-contain"
      />
      {/* Strapline always sits on one line — the panel width below is sized to
          fit it. The mobile panel is only a sliver, so it starts at sm:. */}
      <span className="mt-2 hidden font-serif-display text-xs leading-snug font-bold whitespace-nowrap text-cream-50/90 italic drop-shadow sm:inline-block lg:text-sm xl:text-base">
        {site.tagline}
      </span>
    </div>
  );
}
