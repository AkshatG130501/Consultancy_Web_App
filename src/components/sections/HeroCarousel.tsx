"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BrandMark } from "@/components/decorative/BrandMark";
import { cn } from "@/lib/utils";

type Slide = {
  service: string;
  benefit: string;
  href: string;
  image: string;
  /** Background focal point; defaults to center. */
  position?: string;
};

const slides: Slide[] = [
  {
    service: "Talent Acquisition",
    benefit: "Fulfilling Leadership. Building Futures.",
    href: "/services/talent-acquisition",
    image: "/hero/executive-search.jpg",
  },
  {
    service: "Virtual Services",
    benefit: "Financial Clarity. Strategic Growth.",
    href: "/services/advisory",
    image: "/hero/virtual-cfo.jpg",
    position: "top",
  },
  {
    service: "Back Office",
    benefit: "Efficient Processes. Stronger Foundations.",
    href: "/services/back-office",
    image: "/hero/back-office.jpg",
  },
  {
    service: "Corporate Advisory",
    benefit: "Strategy. Scale. Sustainable Growth.",
    href: "/services/corporate-advisory",
    image: "/hero/corporate-advisory.jpg",
    position: "top",
  },
];

const INTERVAL = 3000;

export function HeroCarousel({
  showBrand = true,
  heading,
}: {
  showBrand?: boolean;
  heading?: string;
}) {
  // `active` runs 0..count. Index `count` is a clone of the first slide so the
  // loop from the last slide always advances forward (never rewinds); once that
  // forward move finishes we snap back to 0 instantly (transition disabled).
  const [active, setActive] = useState(0);
  const [snap, setSnap] = useState(false);
  const count = slides.length;
  const current = active % count; // logical slide, for dots / progress / aria
  const track = [...slides, slides[0]];

  // Auto-advance, respecting reduced-motion (keeps sliding on hover/focus).
  const reduced = useRef(false);
  useEffect(() => {
    reduced.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (reduced.current || snap) return;
    const id = setInterval(() => setActive((i) => i + 1), INTERVAL);
    return () => clearInterval(id);
  }, [active, snap]);

  // After the forward move onto the clone completes, jump back to the real
  // first slide with no transition so the reset is invisible.
  const handleTransitionEnd = () => {
    if (active === count) {
      setSnap(true);
      setActive(0);
    }
  };

  // Re-enable the transition on the next frame, after the snap has painted.
  useEffect(() => {
    if (!snap) return;
    const id = requestAnimationFrame(() => setSnap(false));
    return () => cancelAnimationFrame(id);
  }, [snap]);

  return (
    <section
      className="relative isolate overflow-hidden bg-navy-950"
      aria-roledescription="carousel"
      aria-label="Our services"
    >
      <div className="relative h-[360px] sm:h-[460px] lg:h-[540px]">
        {/* Fixed brand panel — full carousel height, square from sm: up (narrower on mobile
            so it doesn't crowd the text). Width is mirrored by the content's ml-* below. */}
        {showBrand && (
          <div className="absolute inset-y-0 left-0 z-20 w-24 sm:w-[340px] lg:w-[400px] xl:w-[470px]">
            <BrandMark />
          </div>
        )}

        {/* Section heading overlaid on the carousel, aligned with the slide content */}
        {heading && (
          <div className="pointer-events-none absolute top-6 right-0 left-0 z-30 sm:top-8">
            <Container>
              <p
                className={cn(
                  "flex items-center gap-2.5 text-sm font-semibold tracking-wide text-white uppercase drop-shadow-sm",
                  showBrand && "ml-[120px] sm:ml-[364px] lg:ml-[424px] xl:ml-[494px]",
                )}
              >
                <span className="h-px w-6 bg-gold-500" />
                {heading}
              </p>
            </Container>
          </div>
        )}

        {/* Sliding track — each slide is full-width; the track shifts horizontally */}
        <div
          className={cn(
            "flex h-full w-full",
            !snap && "transition-transform duration-700 ease-out",
          )}
          style={{ transform: `translateX(-${active * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {track.map((slide, i) => (
            <div
              key={`${slide.href}-${i}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${(i % count) + 1} of ${count}`}
              aria-hidden={i !== active}
              inert={i !== active}
              className="relative h-full w-full shrink-0 overflow-hidden"
            >
              {/* Background image — kept sharp so it carries the composition */}
              <div
                className="absolute inset-0 scale-105 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundPosition: slide.position,
                }}
              />
              {/* Lighter overlays — enough contrast for the headline, without
                  flattening the photography */}
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/70 to-navy-950/25" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent to-50%" />

              <Container className="relative flex h-full items-center">
                <div
                  className={cn(
                    "max-w-2xl",
                    showBrand && "ml-[120px] sm:ml-[364px] lg:ml-[424px] xl:ml-[494px]",
                    i === active && "animate-fade-up",
                  )}
                >
                  {/* The whole headline block links to the service page. Slides
                      that aren't active are `inert`, so only the visible link
                      is reachable by keyboard. */}
                  <Link href={slide.href} className="group block">
                    <h1 className="font-serif-display text-4xl leading-[0.92] font-semibold tracking-tight text-white uppercase sm:text-5xl lg:text-7xl xl:text-8xl">
                      {slide.service.split(" ").map((word) => (
                        <span key={word} className="block">
                          {word}
                        </span>
                      ))}
                    </h1>
                    <p className="mt-6 max-w-md text-base font-medium tracking-wide text-cream-50/70 sm:text-lg">
                      {slide.benefit}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white uppercase">
                      Explore service
                      <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </div>
              </Container>
            </div>
          ))}
        </div>

        {/* Progress bar — one segment per slide, filling over the auto-advance
            interval. Aligned to start where the brand panel ends. */}
        <div
          className={cn(
            "absolute right-0 bottom-0 z-30 flex h-1 gap-1.5",
            showBrand
              ? "left-24 sm:left-[340px] lg:left-[400px] xl:left-[470px]"
              : "left-0",
          )}
        >
          {slides.map((slide, i) => (
            <button
              key={slide.href}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === current}
              className="relative h-full flex-1 overflow-hidden bg-white/20"
            >
              <span
                className={cn(
                  "block h-full origin-left bg-gold-500",
                  i < current && "scale-x-100",
                  i > current && "scale-x-0",
                  i === current &&
                    "scale-x-100 animate-progress motion-reduce:animate-none",
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
