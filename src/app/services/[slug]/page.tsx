import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { ImageHero } from "@/components/sections/ImageHero";
import { CTABand } from "@/components/sections/CTABand";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { JourneyFlow } from "@/components/decorative/JourneyFlow";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
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
    .filter(
      (s): s is NonNullable<typeof s> => Boolean(s) && s!.slug !== service.slug,
    );

  // These pillars show a "Related" section (like Talent Acquisition) rather than
  // the "Within this practice" specialist grid.
  const relatedStylePillars = ["back-office", "advisory"];
  // Pages that render the "Related" section with tighter spacing above it.
  const tightRelatedSpacing = ["back-office", "advisory", "corporate-advisory"];
  const showPractice =
    service.pillar &&
    children.length > 0 &&
    !relatedStylePillars.includes(service.slug);
  const showRelated =
    !showPractice &&
    (related.length > 0 || (service.relatedCards?.length ?? 0) > 0);

  const crumbs = service.pillar
    ? [{ label: service.heroTitle ?? category.title }]
    : [
        { label: category.title, href: `/services/${category.slug}` },
        { label: service.title },
      ];

  return (
    <>
      {service.heroImage ? (
        <ImageHero
          title={service.heroTitle ?? service.title}
          tagline={service.heroSubtitle}
          image={service.heroImage}
          position={service.heroImagePosition}
          crumbs={crumbs}
        />
      ) : (
        <PageHero
          eyebrow={category.title}
          title={service.heroTagline}
          description={service.shortDescription}
          crumbs={crumbs}
        />
      )}

      <section
        className={
          tightRelatedSpacing.includes(service.slug)
            ? "bg-white pt-24 pb-12"
            : "bg-white py-24"
        }
      >
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[1.6fr_1fr]">
          <div>
            {service.summary && (
              <p className="text-base leading-relaxed text-justify text-navy-700/80 sm:text-lg">
                {service.summary}
              </p>
            )}

            {service.serviceOfferings && service.serviceOfferings.length > 0 && (
              <div className={service.summary ? "mt-14" : ""}>
                <h2 className="font-serif-display text-2xl font-medium text-navy-950">
                  Our Services
                </h2>
                <div className="mt-8 space-y-8">
                  {service.serviceOfferings.map((offering) => (
                    <div key={offering.title}>
                      <h3 className="font-serif-display text-2xl font-medium text-navy-950">
                        {offering.title}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-justify text-navy-700/80">
                        {offering.description}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {offering.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2.5"
                          >
                            <Check className="mt-0.5 size-4 shrink-0 text-gold-600" />
                            <span className="text-sm leading-relaxed text-navy-800">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 space-y-8">
              {service.sections.map((section) => (
                <div key={section.heading}>
                  <h3 className="font-serif-display text-2xl font-medium text-navy-950">
                    {section.heading}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-justify text-navy-700/80">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

          </div>

          <aside className="space-y-8">
            <div className="rounded-2xl border border-navy-950/8 bg-cream-100 p-7">
              <h3 className="font-semibold text-navy-950">Why it works</h3>
              <ul className="mt-4 space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold-600" />
                    <span className="text-sm leading-relaxed text-navy-800">
                      {benefit}
                    </span>
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

      {service.processSteps && (
        <section className="border-y border-slate-200/70 bg-slate-50 py-24">
          <Container>
            <h2 className="font-serif-display text-2xl font-medium text-navy-950 sm:text-3xl">
              The Talent Acquisition Journey
            </h2>
            <div className="mt-10">
              <JourneyFlow steps={service.processSteps} />
            </div>
          </Container>
        </section>
      )}

      {showPractice && (
        <section className="bg-cream-100 py-24">
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

      {showRelated && (
          <section
            className={
              tightRelatedSpacing.includes(service.slug)
                ? "bg-white pt-0 pb-24"
                : "bg-white py-24"
            }
          >
            <Container>
              <SectionHeading eyebrow="Related" title="You might also need" />
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {service.relatedCards?.map((card) => {
                  const content = (
                    <>
                      <div className="flex size-12 items-center justify-center rounded-xl bg-gold-100 text-gold-600">
                        <DynamicIcon name={card.icon} className="size-5" />
                      </div>
                      <h3 className="mt-6 font-serif-display text-xl font-medium text-navy-950">
                        {card.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-700/70">
                        {card.description}
                      </p>
                      {card.href && (
                        <span className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-gold-700">
                          Learn more
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      )}
                    </>
                  );
                  const base =
                    "group flex flex-col rounded-2xl border border-navy-950/10 bg-white p-8 shadow-sm shadow-navy-950/5 ring-1 ring-navy-950/[0.02]";
                  return card.href ? (
                    <Link
                      key={card.title}
                      href={card.href}
                      className={`${base} transition-all duration-200 hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-xl hover:shadow-navy-950/10`}
                    >
                      {content}
                    </Link>
                  ) : (
                    <div key={card.title} className={base}>
                      {content}
                    </div>
                  );
                })}
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
