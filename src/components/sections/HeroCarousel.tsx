"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { BrandMark } from "@/components/decorative/BrandMark";
import { cn } from "@/lib/utils";

type Slide = {
  service: string;
  benefit: string;
  href: string;
  image: string;
};

const slides: Slide[] = [
  {
    service: "Executive Search",
    benefit: "Fulfilling Leadership. Building Futures.",
    href: "/services/executive-search",
    image: "/hero/executive-search.jpg",
  },
  {
    service: "Virtual CFO",
    benefit: "Financial Clarity. Strategic Growth.",
    href: "/services/advisory",
    image: "/hero/virtual-cfo.jpg",
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
    image: "/hero/executive-search.jpg",
  },
];

const INTERVAL = 3000;

export function HeroCarousel({ showBrand = true }: { showBrand?: boolean }) {
  const [active, setActive] = useState(0);
  const count = slides.length;

  // Auto-advance, respecting reduced-motion (keeps sliding on hover/focus).
  const reduced = useRef(false);
  useEffect(() => {
    reduced.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (reduced.current) return;
    const id = setInterval(() => setActive((i) => (i + 1) % count), INTERVAL);
    return () => clearInterval(id);
  }, [count, active]);

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
          <div className="absolute inset-y-0 left-0 z-20 w-24 shadow-xl shadow-black/30 sm:w-[300px] lg:w-[340px]">
            <BrandMark />
          </div>
        )}

        {/* Sliding track — each slide is full-width; the track shifts horizontally */}
        <div
          className="flex h-full w-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.href}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={i !== active}
              inert={i !== active}
              className="relative h-full w-full shrink-0 overflow-hidden"
            >
              {/* Background image — kept sharp so it carries the composition */}
              <div
                className="absolute inset-0 scale-105 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              {/* Lighter overlays — enough contrast for the headline, without
                  flattening the photography */}
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/70 to-navy-950/25" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent to-50%" />

              <Container className="relative flex h-full items-center">
                <div
                  className={cn(
                    "max-w-2xl",
                    showBrand && "ml-[120px] sm:ml-[324px] lg:ml-[364px]",
                    i === active && "animate-fade-up",
                  )}
                >
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
            showBrand ? "left-24 sm:left-[300px] lg:left-[340px]" : "left-0",
          )}
        >
          {slides.map((slide, i) => (
            <button
              key={slide.href}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active}
              className="relative h-full flex-1 overflow-hidden bg-white/20"
            >
              <span
                className={cn(
                  "block h-full origin-left bg-gold-500",
                  i < active && "scale-x-100",
                  i > active && "scale-x-0",
                  i === active && "scale-x-100 animate-progress motion-reduce:animate-none",
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
