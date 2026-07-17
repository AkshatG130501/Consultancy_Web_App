"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
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
        "sticky top-0 z-50 border-b border-navy-950/8 bg-cream-50/90 backdrop-blur-md transition-shadow duration-300",
        scrolled && "shadow-lg shadow-navy-950/5",
      )}
    >
      <Container className="flex h-32 items-center justify-between py-4">
        <Logo size="2xl" />

        <nav className="hidden items-center gap-4 lg:flex">
          {primaryNav.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-lg font-medium text-navy-800 transition-colors group-hover:bg-navy-950/5 group-hover:text-navy-950"
                >
                  {item.title}
                  <ChevronDown className="size-4 transition-transform duration-200 group-hover:rotate-180" />
                </Link>

                {/* Dropdown — pt-2 keeps a hover bridge so the panel doesn't
                    close in the gap between trigger and menu. */}
                <div className="invisible absolute top-full left-0 z-50 w-80 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="rounded-2xl border border-navy-950/8 bg-cream-50 p-2 shadow-xl shadow-navy-950/10">
                    {item.children.map((child) => (
                      <Link
                        key={child.slug}
                        href={`/services/${child.slug}`}
                        className="block rounded-xl p-3 transition-colors hover:bg-navy-950/5"
                      >
                        <p className="font-medium text-navy-950">
                          {child.title}
                        </p>
                        <p className="mt-0.5 text-sm leading-snug text-navy-700/70">
                          {child.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-5 py-2.5 text-lg font-medium text-navy-800 transition-colors hover:bg-navy-950/5 hover:text-navy-950"
              >
                {item.title}
              </Link>
            ),
          )}
        </nav>

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
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-3.5 text-lg font-medium text-navy-950"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.title}
                </Link>
                {item.children && (
                  <div className="mb-1 ml-3 flex flex-col gap-0.5 border-l border-navy-950/10 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.slug}
                        href={`/services/${child.slug}`}
                        className="block rounded-lg px-3 py-2.5 text-base font-medium text-navy-700 hover:text-navy-950"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
