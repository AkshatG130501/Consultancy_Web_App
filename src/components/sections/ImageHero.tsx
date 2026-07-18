import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

/**
 * Full-bleed image hero: a dark-overlaid photograph carrying a large stacked
 * uppercase serif headline, mirroring the homepage carousel slides. Used for
 * pillar service pages that want a bold, editorial top section.
 */
export function ImageHero({
  title,
  tagline,
  image,
  position,
  crumbs,
}: {
  title: string;
  tagline?: string;
  image: string;
  /** Background focal point; defaults to center. */
  position?: string;
  crumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950">
      <div className="relative flex min-h-[380px] items-center py-20 sm:min-h-[460px] lg:min-h-[520px]">
        {/* Background photograph — kept sharp so it carries the composition */}
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})`, backgroundPosition: position }}
        />
        {/* Overlays — dark on the left for headline contrast, easing to the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/70 to-navy-950/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent to-50%" />

        <Container className="relative">
          {crumbs && (
            <nav className="mb-6 flex items-center gap-1.5 text-xs text-cream-50/60">
              <Link href="/" className="hover:text-cream-50">
                Home
              </Link>
              {crumbs.map((crumb) => (
                <span key={crumb.label} className="flex items-center gap-1.5">
                  <ChevronRight className="size-3" />
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-cream-50">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-cream-50/90">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          <h1 className="font-serif-display max-w-2xl text-4xl leading-[0.92] font-semibold tracking-tight text-white uppercase sm:text-5xl lg:text-7xl xl:text-8xl">
            {title.split(" ").map((word) => (
              <span key={word} className="block">
                {word}
              </span>
            ))}
          </h1>
          {tagline && (
            <p className="mt-6 max-w-md text-base font-medium tracking-wide text-cream-50/70 sm:text-lg">
              {tagline}
            </p>
          )}
        </Container>
      </div>
    </section>
  );
}
