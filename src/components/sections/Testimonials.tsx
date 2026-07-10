import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-cream-100 py-24">
      <Container>
        <SectionHeading
          eyebrow="Client voices"
          title="Trusted by finance and HR leaders across three continents"
          align="center"
        />
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <figure
              key={t.name + t.location}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-sm shadow-navy-950/5"
            >
              <Quote className="size-6 text-gold-500" />
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-navy-800/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-navy-950/8 pt-4">
                <p className="text-sm font-semibold text-navy-950">{t.name}</p>
                <p className="text-xs text-navy-700/60">
                  {t.role} · {t.location}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
