import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GridPattern } from "@/components/decorative/GridPattern";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  image,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  crumbs?: { label: string; href?: string }[];
  image?: string;
}) {
  const dark = Boolean(image);

  return (
    <section
      className={cn(
        "relative overflow-hidden py-16 sm:py-24",
        dark ? "bg-navy-950" : "border-b border-navy-950/8 bg-cream-100",
      )}
    >
      {image ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/85 to-navy-950/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent to-60%" />
        </>
      ) : (
        <GridPattern className="text-navy-950/[0.03]" />
      )}

      <Container className="relative">
        {crumbs && (
          <nav
            className={cn(
              "mb-6 flex items-center gap-1.5 text-xs",
              dark ? "text-cream-50/60" : "text-navy-600",
            )}
          >
            <Link
              href="/"
              className={cn(dark ? "hover:text-cream-50" : "hover:text-navy-900")}
            >
              Home
            </Link>
            {crumbs.map((crumb) => (
              <span key={crumb.label} className="flex items-center gap-1.5">
                <ChevronRight className="size-3" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className={cn(
                      dark ? "hover:text-cream-50" : "hover:text-navy-900",
                    )}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={cn(dark ? "text-cream-50/90" : "text-navy-800")}>
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}
        <p
          className={cn(
            "mb-4 flex items-center gap-2 text-sm font-semibold tracking-wide uppercase",
            dark ? "text-gold-400" : "text-gold-600",
          )}
        >
          <span className="h-px w-6 bg-gold-500" />
          {eyebrow}
        </p>
        <h1
          className={cn(
            "font-serif-display max-w-2xl text-4xl font-medium text-balance sm:text-5xl",
            dark ? "text-white" : "text-navy-950",
          )}
        >
          {title}
        </h1>
        {description && (
          <p
            className={cn(
              "mt-5 max-w-xl text-base leading-relaxed",
              dark ? "text-cream-50/80" : "text-navy-700/80",
            )}
          >
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
