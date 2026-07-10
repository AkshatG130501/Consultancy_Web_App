"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/lib/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Subtle elevation once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-cream-50/90 backdrop-blur-md transition-shadow duration-300",
        scrolled
          ? "border-navy-950/8 shadow-lg shadow-navy-950/5"
          : "border-transparent",
      )}
    >
      <Container className="flex h-24 items-center justify-between py-3">
        <Logo size="lg" />

        <nav className="hidden items-center gap-2 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-5 py-2.5 text-lg font-medium text-navy-800 transition-colors hover:bg-navy-950/5 hover:text-navy-950"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="lg">
            Get in touch
          </Button>
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-full p-2 text-navy-950 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="border-t border-navy-950/8 bg-cream-50 lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3.5 text-lg font-medium text-navy-950"
                onClick={() => setMobileOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <Button href="/contact" className="mt-3 justify-center">
              Get in touch
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
