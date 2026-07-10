import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-wide text-gold-600 uppercase">
          {align === "center" ? (
            eyebrow
          ) : (
            <>
              <span className="h-px w-6 bg-gold-500" />
              {eyebrow}
            </>
          )}
        </p>
      )}
      <h2
        className={cn(
          "font-serif-display text-3xl font-medium text-balance text-navy-950 sm:text-4xl",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-navy-700/80">
          {description}
        </p>
      )}
    </div>
  );
}
