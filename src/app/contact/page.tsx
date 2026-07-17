import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ScaleBridge Global for executive search, back-office, or CFO advisory mandates.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your mandate"
        description="Whether it's a single hire or a full financial restructuring, tell us what you need and we'll respond within one business day."
        crumbs={[{ label: "Contact" }]}
        image="/page/contact.jpg"
      />

      <section className="bg-white py-20">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-8">
            <div>
              <h2 className="font-serif-display text-2xl font-medium text-navy-950">
                Reach us directly
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-navy-700/70">
                Prefer email or a call? Use the details below — we monitor
                these directly, no call centre in between.
              </p>
            </div>

            <div className="space-y-5">
              <InfoRow icon={MapPin} label="Office">
                {site.address.line1}, {site.address.line2}
                <br />
                {site.address.line3}
              </InfoRow>
              <InfoRow icon={Mail} label="Email">
                <a href={`mailto:${site.email}`} className="hover:text-gold-700">
                  {site.email}
                </a>
              </InfoRow>
              <InfoRow icon={Phone} label="Phone">
                <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="hover:text-gold-700">
                  {site.phone}
                </a>
              </InfoRow>
              <InfoRow icon={Clock} label="Hours">
                Monday – Friday, 9:00 AM – 6:30 PM IST
              </InfoRow>
            </div>

            <div className="rounded-2xl border border-gold-500/20 bg-gold-100 p-6 text-navy-900">
              <p className="text-sm leading-relaxed text-navy-700/80">
                Looking for a role instead?{" "}
                <Link href="/careers" className="font-semibold text-gold-700 hover:text-gold-600">
                  Visit our careers page
                </Link>{" "}
                to see open mandates across our markets.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-navy-950/8 bg-cream-50 p-8 sm:p-10">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
        <Icon className="size-4.5" />
      </div>
      <div>
        <p className="text-xs font-semibold tracking-wide text-navy-950/50 uppercase">
          {label}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-navy-800/90">{children}</p>
      </div>
    </div>
  );
}
