import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { ServiceCard } from "@/components/cards/ServiceCard";
import {
  services,
  getServiceBySlug,
  getChildren,
  serviceCategories,
} from "@/lib/data/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const category = serviceCategories[service.category];
  const children = service.pillar ? getChildren(service.slug) : [];
  const related = service.relatedSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s) && s!.slug !== service.slug);

  const crumbs = service.pillar
    ? [{ label: category.title }]
    : [
        { label: category.title, href: `/services/${category.slug}` },
        { label: service.title },
      ];

  return (
    <>
      <PageHero
        eyebrow={category.title}
        title={service.heroTagline}
        description={service.shortDescription}
        crumbs={crumbs}
      />

      <section className="bg-white py-20">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <p className="text-lg leading-relaxed text-navy-800/90">
              {service.summary}
            </p>

            <div className="mt-12 space-y-10">
              {service.sections.map((section) => (
                <div key={section.heading}>
                  <h3 className="font-serif-display text-xl font-medium text-navy-950">
                    {section.heading}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-navy-700/80">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            {service.processSteps && (
              <div className="mt-14">
                <h3 className="font-serif-display text-xl font-medium text-navy-950">
                  How the process works
                </h3>
                <ol className="mt-6 space-y-4">
                  {service.processSteps.map((step, i) => (
                    <li key={step} className="flex gap-4">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gold-100 text-xs font-semibold text-gold-700">
                        {i + 1}
                      </span>
                      <span className="pt-0.5 text-sm leading-relaxed text-navy-700/80">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          <aside className="space-y-8">
            <div className="rounded-2xl border border-navy-950/8 bg-cream-100 p-7">
              <h3 className="font-semibold text-navy-950">Why it works</h3>
              <ul className="mt-4 space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-2.5 text-sm text-navy-700/80">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold-600" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gold-500/20 bg-gold-100 p-7 text-navy-900">
              <h3 className="font-serif-display text-lg font-medium text-navy-950">
                Ready to scope this out?
              </h3>
              <p className="mt-2 text-sm text-navy-700/80">
                Tell us about your situation — we&apos;ll respond within one
                business day with next steps.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-gold-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gold-700"
              >
                Get in touch
              </Link>
            </div>
          </aside>
        </Container>
      </section>

      {service.pillar && children.length > 0 && (
        <section className="bg-cream-100 py-20">
          <Container>
            <SectionHeading
              eyebrow="Within this practice"
              title={`Specialist services under ${category.title}`}
            />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {children.map((child) => (
                <ServiceCard key={child.slug} service={child} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {!service.pillar && related.length > 0 && (
        <section className="bg-cream-100 py-20">
          <Container>
            <SectionHeading eyebrow="Related" title="You might also need" />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.slice(0, 3).map((r) => (
                <ServiceCard key={r.slug} service={r} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTABand />
    </>
  );
}
