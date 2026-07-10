import type { Metadata } from "next";
import { ShieldCheck, Target, Handshake, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 2012, Northbridge Advisory partners with 300+ businesses across Africa, the Middle East, and Asia on executive search, back-office, and CFO advisory mandates.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity, non-negotiable",
    description:
      "We turn down mandates that would compromise confidentiality or independence — trust is the only asset a consulting firm can't rebuild quickly.",
  },
  {
    icon: Target,
    title: "Outcomes over hours",
    description:
      "We scope engagements around the result the client needs, not the number of hours we can bill against it.",
  },
  {
    icon: Handshake,
    title: "Long-term partnership",
    description:
      "Most of our client relationships span multiple engagements over several years — we build for that, not for a single transaction.",
  },
  {
    icon: TrendingUp,
    title: "Regional depth",
    description:
      "Every consultant on our team has lived and worked in the markets they cover. Market knowledge is earned, not researched.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A boutique consulting firm built on trust"
        description="Northbridge Advisory partners with early-stage ventures, established corporates, nonprofits, and development finance institutions across Africa, the Middle East, and Asia."
        crumbs={[{ label: "About" }]}
        image="/page/about.jpg"
      />

      <section className="bg-white py-24">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our story" title="Twelve years, three regions, one standard" />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-navy-700/80">
              <p>
                Northbridge Advisory was founded in {site.founded} by a small
                group of finance and HR professionals who had spent their
                careers on the client side — running finance functions and
                leading recruitment for multinational businesses across
                India, East Africa, and Central Europe.
              </p>
              <p>
                That experience shaped how we work: we scope every mandate
                the way we&apos;d want it scoped if we were the client, and we
                measure success by whether the hire performs, the books
                close on time, and the financing closes at the terms we
                promised — not by hours logged.
              </p>
              <p>
                Today we work with more than 300 clients across 40+
                countries, spanning early-stage ventures raising their first
                institutional round to established corporates restructuring
                a regional finance function.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Our promise" title="What you can expect from an engagement" />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-navy-700/80">
              <p>
                Every engagement starts with a scoping conversation, not a
                proposal template. We tell you directly if a mandate sits
                outside our depth, and we agree a fixed timeline before any
                work begins.
              </p>
              <p>
                You get a named consultant who stays engaged for the
                duration of the mandate — not a rotating team of juniors
                managed by a partner you only see at kickoff and sign-off.
              </p>
              <p>
                Our vision is straightforward: to be the consulting partner
                that ambitious businesses in complex, fast-growing markets
                call first — because we&apos;ve already proven, mandate after
                mandate, that we deliver on what we scope.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream-100 py-24">
        <Container>
          <SectionHeading
            eyebrow="What we stand for"
            title="The principles behind every mandate"
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-white p-7 text-center shadow-sm shadow-navy-950/5"
              >
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-gold-100 text-gold-600">
                  <value.icon className="size-5" />
                </div>
                <h3 className="mt-5 font-semibold text-navy-950">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title="Want to know if we're the right fit for your mandate?"
        description="A scoping call costs nothing and tells you within thirty minutes whether we're the right partner."
        primaryLabel="Book a scoping call"
        secondaryLabel="Meet the team"
        secondaryHref="/team"
      />
    </>
  );
}
