"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Slide = {
  service: string;
  benefit: string;
  href: string;
  image: string;
};

const slides: Slide[] = [
  {
    service: "Executive Search & RPO",
    benefit:
      "Build the leadership team your growth deserves — C-suite to specialist talent, placed by consultants who’ve worked in your sector.",
    href: "/services/executive-search",
    image: "/hero/executive-search.jpg",
  },
  {
    service: "Back-Office Solutions",
    benefit:
      "Grow your business, not your overhead — a fully managed accounting, payroll and audit team on your systems, in your time zone.",
    href: "/services/back-office",
    image: "/hero/back-office.jpg",
  },
  {
    service: "Virtual CFO & Advisory",
    benefit:
      "Financial leadership that helps your business grow — sharper decisions, stronger cash flow, and funding-ready books, without a full-time hire.",
    href: "/services/advisory",
    image: "/hero/virtual-cfo.jpg",
  },
];

const INTERVAL = 5000;

export function HeroCarousel() {
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
      <div className="relative h-[360px] sm:h-[420px] lg:h-[440px]">
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
              {/* Background image — dimmed + softly blurred so the headline leads */}
              <div
                className="absolute -inset-6 scale-105 bg-cover bg-right [filter:blur(2px)]"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              {/* Dark overlays for contrast + legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 to-transparent to-60%" />

              <Container className="relative flex h-full items-center">
                <div className={cn("max-w-2xl", i === active && "animate-fade-up")}>
                  <p className="mb-3 flex items-center gap-2.5 text-sm font-semibold tracking-wide text-gold-400 uppercase">
                    <span className="h-px w-6 bg-gold-500" />
                    For ambitious businesses in emerging markets
                  </p>
                  <h1 className="font-serif-display text-4xl font-semibold text-balance text-white sm:text-5xl">
                    {slide.service}
                  </h1>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-cream-50/85 sm:text-lg">
                    {slide.benefit}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-4">
                    <Button href="/contact" size="lg" showArrow>
                      Book a consultation
                    </Button>
                    <Link
                      href={slide.href}
                      className="inline-flex items-center gap-1.5 text-base font-medium text-white/90 underline-offset-4 transition-colors hover:text-white hover:underline"
                    >
                      Explore services
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </Container>
            </div>
          ))}
        </div>

        {/* Prev/next controls */}
        <button
          type="button"
          onClick={() => setActive((i) => (i - 1 + count) % count)}
          aria-label="Previous slide"
          className="absolute top-1/2 left-3 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-navy-950/30 text-white backdrop-blur-sm transition-colors hover:border-gold-500 hover:bg-navy-950/50 sm:left-5"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => setActive((i) => (i + 1) % count)}
          aria-label="Next slide"
          className="absolute top-1/2 right-3 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-navy-950/30 text-white backdrop-blur-sm transition-colors hover:border-gold-500 hover:bg-navy-950/50 sm:right-5"
        >
          <ChevronRight className="size-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
          {slides.map((slide, i) => (
            <button
              key={slide.href}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === active
                  ? "w-8 bg-gold-500"
                  : "w-2 bg-white/40 hover:bg-white/70",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
