import type { Metadata } from "next";
import Image from "next/image";
import {
  Check,
  Globe as GlobeIcon,
  Handshake,
  Network,
  Target,
  Wrench,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { GridPattern } from "@/components/decorative/GridPattern";
import { Globe } from "@/components/decorative/Globe";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ScaleBridge Global is a boutique business consulting firm helping ambitious organizations build stronger leadership, scalable operations, and financial excellence across Africa, the Middle East, and Asia.",
};

const differentiators = [
  {
    icon: Check,
    title: "We Stay Until It Works",
    description:
      "We don't simply recommend solutions — we work alongside our clients to implement them, measure outcomes, and continuously improve performance.",
    image: "/hero/virtual-cfo.jpg",
  },
  {
    icon: Target,
    title: "Business-First Perspective",
    description:
      "We understand business beyond individual functions. Every recommendation is aligned with commercial objectives, operational realities, and long-term growth.",
    image: "/page/services.jpg",
  },
  {
    icon: Wrench,
    title: "Hands-on Execution",
    description:
      "Strategy has value only when it is successfully implemented. Our consultants stay actively involved until solutions are delivering measurable results.",
    image: "/hero/back-office.jpg",
  },
  {
    icon: Network,
    title: "Cross-Functional Expertise",
    description:
      "Integrated capabilities spanning Executive Search, HR, Finance, Operations, Business Processes, Organization Design, and Corporate Strategy.",
    image: "/page/team.jpg",
  },
  {
    icon: GlobeIcon,
    title: "Global Experience",
    description:
      "We bring global best practices while respecting local realities — with professionals who have worked across Asia, Africa, the Middle East, and Europe.",
    image: "/page/about.jpg",
  },
  {
    icon: Handshake,
    title: "Trusted Growth Partner",
    description:
      "From a start-up building its first leadership team to an established company entering new markets, we become an extension of our clients' leadership.",
    image: "/hero/executive-search.jpg",
  },
];

// Positions for the five orbiting images, evenly spaced around a circle
// (starting at the top), used by the sticky cluster in the Differentiators
// section. Radius is inset so each image stays fully inside the container box
// (no clipping). Kept static so it stays deterministic on the server.
const orbitPositions = [
  { top: "17%", left: "50%" },
  { top: "34%", left: "79%" },
  { top: "66%", left: "79%" },
  { top: "83%", left: "50%" },
  { top: "66%", left: "21%" },
  { top: "34%", left: "21%" },
];

const methodology = [
  {
    title: "Discover",
    description:
      "Understand the business, objectives, challenges, stakeholders, and current operating environment.",
  },
  {
    title: "Design",
    description:
      "Develop practical solutions aligned with business strategy and organizational priorities.",
  },
  {
    title: "Deploy",
    description:
      "Implement with clearly defined milestones, ownership, and governance.",
  },
  {
    title: "Measure",
    description:
      "Track outcomes through measurable KPIs and business performance indicators.",
  },
  {
    title: "Sustain",
    description:
      "Provide continuous support to ensure long-term success and continuous improvement.",
  },
];

const industries = [
  "FMCG",
  "Manufacturing",
  "Consumer Products",
  "Healthcare & Pharmaceuticals",
  "Logistics & Supply Chain",
  "Engineering",
  "Construction",
  "Commodity Trading",
  "Financial Services",
  "Retail",
  "Technology",
  "Hospitality",
  "Infrastructure",
  "Family Businesses",
  "Growth-stage Enterprises",
];

const reasons = [
  "Senior professionals with extensive industry experience",
  "Practical solutions rather than theoretical recommendations",
  "International exposure across diverse markets",
  "Confidential and ethical engagement practices",
  "Personalized attention from experienced consultants",
  "Long-term partnerships focused on measurable business outcomes",
];

/* -------------------------------------------------------------------------- */

function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-20 sm:py-28">
      <GridPattern className="text-navy-950/[0.04]" />
      <div className="absolute -top-24 -right-24 -z-10 size-[36rem] rounded-full bg-gold-600/10 blur-3xl" />
      <Container className="grid grid-cols-1 items-stretch gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
        <div className="animate-fade-up">
          <p className="mb-5 flex items-center gap-2.5 text-sm font-semibold tracking-wide text-gold-600 uppercase">
            <span className="h-px w-6 bg-gold-500" />
            About Us
          </p>
          <h1 className="font-serif-display text-xl font-medium text-balance text-navy-950 sm:text-2xl">
            Helping businesses scale up with the right people, processes and
            financial leadership
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-justify text-navy-700/80 sm:text-lg">
            We are a boutique business consulting firm partnering with ambitious
            organizations to build stronger leadership teams, establish scalable
            operations, and create financial excellence.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-justify text-navy-700/80 sm:text-lg">
            From executive search and leadership hiring to back-office setup,
            Virtual CFO services, and strategic business advisory, we help
            businesses build the foundation required for sustainable growth.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-justify text-navy-700/80 sm:text-lg">
            Our approach combines strategic thinking with practical execution.
            We don&apos;t simply recommend solutions—we work alongside our
            clients to implement them, measure outcomes, and continuously
            improve performance.
          </p>
        </div>

        <div className="relative animate-fade-in lg:h-full">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-navy-950/20 ring-1 ring-navy-950/10 lg:aspect-auto lg:h-full">
            <Image
              src="/page/about.jpg"
              alt="ScaleBridge Global advisory team in discussion"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-5 shadow-xl shadow-navy-950/15 ring-1 ring-navy-950/[0.06] sm:block">
            <p className="font-serif-display text-lg font-medium text-navy-950">
              Empowering Businesses.
            </p>
            <p className="font-serif-display text-lg font-medium text-gold-600">
              Beyond Borders.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function OurStory() {
  return (
    <section className="bg-white py-24">
      <Container className="grid grid-cols-1 items-stretch gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Our story"
            title={
              <>
                Decades of experience,
                <br />
                put to work for your business
              </>
            }
          />
          <div className="mt-6 space-y-5 text-base leading-relaxed text-justify text-navy-700/80">
            <p>
              Our leadership team brings together decades of experience across
              finance, human resources, operations, business transformation, and
              organizational development.
            </p>
            <p>
              Having worked with multinational corporations, family-owned
              enterprises, high-growth businesses, and international
              organizations across multiple countries and industries, we
              understand the challenges businesses face at every stage of
              growth.
            </p>
            <p>
              This unique combination of consulting expertise and operational
              leadership enables us to deliver solutions that are practical,
              commercially viable, and results-oriented.
            </p>
          </div>
        </div>

        {/* Relevant image — reinforces an experienced team, with real figures
            kept on a floating card overlapping the frame */}
        <div className="relative lg:h-full">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl shadow-navy-950/10 ring-1 ring-navy-950/10 lg:aspect-auto lg:h-full">
            <Image
              src="/page/careers.jpg"
              alt="Experienced advisors working together"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden items-center gap-6 rounded-2xl bg-white p-5 shadow-xl shadow-navy-950/15 ring-1 ring-navy-950/[0.04] sm:flex">
            <div>
              <p className="font-serif-display text-3xl font-medium text-navy-950">
                {site.stats[2].value}
              </p>
              <p className="mt-0.5 text-xs text-navy-700/70">
                {site.stats[2].label}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Differentiators() {
  return (
    <section className="bg-white py-24">
      <Container className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left: heading + points — this column scrolls */}
        <div>
          <SectionHeading
            eyebrow="Our USP"
            descriptionClassName="text-justify"
          />
          <div className="mt-10 space-y-8">
            {differentiators.map((item) => (
              <div key={item.title}>
                <h3 className="font-serif-display text-2xl font-medium text-navy-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-justify text-navy-700/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: sticky circular cluster — one image per point, stays put
            while the points on the left scroll past. Pinned below the 128px
            (h-32) sticky navbar so the top image is never tucked behind it. */}
        <div className="lg:sticky lg:top-36">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            {/* dashed orbit ring */}
            <div className="absolute inset-[17%] rounded-full border border-dashed border-navy-950/15" />
            <div className="absolute inset-[17%] rounded-full bg-gold-600/[0.04]" />

            {/* center medallion — shows the brand tagline */}
            <div className="absolute top-1/2 left-1/2 flex size-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-gold-600 px-4 text-center text-white shadow-xl shadow-gold-600/30 sm:size-36">
              <span className="font-serif-display text-[13px] leading-snug font-medium text-balance italic sm:text-sm">
                {site.tagline}
              </span>
            </div>

            {/* orbiting images */}
            {differentiators.map((item, i) => (
              <div
                key={item.title}
                style={orbitPositions[i]}
                className="absolute size-28 -translate-x-1/2 -translate-y-1/2 sm:size-32"
              >
                <div className="group relative size-full overflow-hidden rounded-full shadow-lg shadow-navy-950/15 ring-4 ring-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="128px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="sr-only">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Methodology() {
  return (
    <section className="bg-white py-24">
      <Container className="grid grid-cols-1 items-stretch gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left: heading + numbered steps */}
        <div>
          <SectionHeading
            eyebrow="Our methodology"
            title="A structured, yet flexible framework"
            titleClassName="text-2xl sm:text-3xl sm:whitespace-nowrap"
            description="Every engagement follows the same disciplined path — from understanding your business to sustaining the results long after delivery."
            descriptionClassName="text-justify"
          />
          <ol className="mt-10 space-y-4">
            {methodology.map((step) => (
              <li key={step.title}>
                <h3 className="font-serif-display text-2xl font-medium text-navy-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-justify text-navy-700/80">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Right: relevant image, matched to the content height */}
        <div className="relative lg:h-full">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl shadow-navy-950/10 ring-1 ring-navy-950/10 lg:aspect-auto lg:h-full">
            <Image
              src="/page/methodology.jpg"
              alt="Our consulting methodology in practice"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function GlobalPresence() {
  return (
    <section className="bg-white py-24">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Global presence"
            title="Building businesses. Beyond borders."
            description="Our professionals have worked with organizations across Asia, Africa, the Middle East, Europe, and emerging markets — bringing global best practices while respecting local business realities."
            descriptionClassName="text-justify"
          />
          <div className="mt-8 flex flex-wrap gap-2.5">
            {site.regions.map((region) => (
              <span
                key={region}
                className="rounded-full border border-navy-950/10 bg-cream-100 px-4 py-1.5 text-sm font-medium text-navy-800"
              >
                {region}
              </span>
            ))}
          </div>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-justify text-navy-700/80">
            Whether supporting a start-up building its first leadership team or
            an established company expanding into new markets, we become an
            extension of our clients&apos; leadership.
          </p>
        </div>
        <div className="flex justify-center">
          <Globe />
        </div>
      </Container>
    </section>
  );
}

function Industries() {
  return (
    <section className="bg-white py-24">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative lg:order-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl shadow-navy-950/10 ring-1 ring-navy-950/10">
            <Image
              src="/page/insights.jpg"
              alt="A professional workspace representing the sectors we serve"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
          </div>
        </div>
        <div className="lg:order-1">
          <SectionHeading
            eyebrow="Industries we understand"
            title="Deep experience across sectors"
            description="Our experience spans a broad range of industries — giving us the context to move quickly on your mandate."
            descriptionClassName="text-justify"
          />
          <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {industries.map((industry) => (
              <li key={industry} className="flex items-start gap-2.5">
                <Check className="mt-0.5 size-4 shrink-0 text-gold-600" />
                <span className="text-sm leading-relaxed text-navy-800">
                  {industry}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <Container className="grid grid-cols-1 items-stretch gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left: heading + reasons */}
        <div>
          <SectionHeading
            eyebrow="Why clients choose us"
            title="A partner invested in your outcomes"
            description="Our approach combines strategic thinking with practical execution — measured by the results we deliver, not the hours we bill."
            descriptionClassName="text-justify"
          />
          <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-2.5">
                <Check className="mt-0.5 size-4 shrink-0 text-gold-600" />
                <span className="text-sm leading-relaxed text-navy-800">
                  {reason}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: relevant image, matched to the content height */}
        <div className="relative lg:h-full">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl shadow-navy-950/10 ring-1 ring-navy-950/10 lg:aspect-auto lg:h-full">
            <Image
              src="/page/careers.jpg"
              alt="Our team partnering with clients"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Vision() {
  return (
    <section className="bg-white py-24">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-wide text-gold-600 uppercase">
            <span className="h-px w-6 bg-gold-500" />
            Our Vision
          </p>
          <p className="mt-6 text-base leading-relaxed text-justify text-navy-700/80">
            To become the trusted strategic partner for organizations seeking
            world-class leadership, operational excellence, and sustainable
            business growth across borders.
          </p>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl shadow-navy-950/10 ring-1 ring-navy-950/10">
            <Image
              src="/page/contact.jpg"
              alt="A modern workspace with a city skyline view"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Mission() {
  return (
    <section className="bg-white py-24">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="lg:order-1">
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-wide text-gold-600 uppercase">
            <span className="h-px w-6 bg-gold-500" />
            Our Mission
          </p>
          <p className="mt-6 text-base leading-relaxed text-justify text-navy-700/80">
            To empower businesses with exceptional talent, robust financial
            leadership, scalable operational systems, and practical advisory
            services that create lasting value.
          </p>
        </div>
        <div className="relative lg:order-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl shadow-navy-950/10 ring-1 ring-navy-950/10">
            <Image
              src="/page/team.jpg"
              alt="A team collaborating together"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}

const founders = [
  {
    name: "Vikrant Khandelwal",
    role: "Co-Founder & Managing Partner",
    image: "/founders/vikrant-khandelwal.jpg",
    bio: "Vikrant leads client relationships and talent development, drawing on more than a decade of work across European, Asian, and African mandates. He focuses on client strategy, quality control, and building the firm's consulting team.",
  },
  {
    name: "Tushar Vir",
    role: "Co-Founder & Managing Partner",
    image: "/founders/tushar-vir.jpg",
    bio: "A Chartered Accountant, Tushar has led debt syndication and M&A mandates across India, East Africa, and Central Europe. He anchors the firm's corporate finance, capital-raising, and advisory practice.",
  },
  {
    name: "Brajesh Kumawat",
    role: "Co-Founder & Managing Partner",
    image: "/founders/brajesh-kumawat.jpg",
    bio: "Brajesh drives the firm's operations and advisory practice, partnering with clients to build scalable processes and resilient financial foundations that support long-term growth.",
  },
];

function Founders() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          align="center"
          className="mx-auto"
          title="Founders"
          titleClassName="font-serif-display text-4xl sm:text-5xl lg:text-6xl"
        />
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {founders.map((founder) => (
            <div key={founder.name}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg shadow-navy-950/10 ring-1 ring-navy-950/10">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent" />
              </div>
              <h3 className="mt-5 font-serif-display text-xl font-medium text-navy-950">
                {founder.name}
              </h3>
              <p className="mt-1 text-sm font-semibold tracking-wide text-gold-700 uppercase">
                {founder.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-navy-700/75">
                {founder.bio}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <HeroCarousel showBrand={false} />
      <AboutHero />
      <OurStory />
      <Differentiators />
      <Methodology />
      <GlobalPresence />
      <Industries />
      <WhyChooseUs />
      <Vision />
      <Mission />
      <Founders />
    </>
  );
}
