import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import type { Service } from "@/lib/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-2xl border border-navy-950/10 bg-white p-8 shadow-sm shadow-navy-950/5 ring-1 ring-navy-950/[0.02] transition-all duration-200 hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-xl hover:shadow-navy-950/10"
    >
      <div className="flex size-12 items-center justify-center rounded-xl bg-gold-100 text-gold-600">
        <DynamicIcon name={service.icon} className="size-5" />
      </div>
      <h3 className="mt-6 font-serif-display text-xl font-medium text-navy-950">
        {service.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-700/70">
        {service.shortDescription}
      </p>
      <span className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-gold-700">
        Learn more
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
