import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Insight } from "@/lib/data/insights";
import { formatDate } from "@/lib/format-date";

export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <Link
      href={`/blogs/${insight.slug}`}
      className="group flex flex-col rounded-2xl border border-navy-950/8 bg-white p-7 transition-all hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-xl hover:shadow-navy-950/5"
    >
      <span className="inline-flex w-fit items-center rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-700">
        {insight.category}
      </span>
      <h3 className="mt-5 font-serif-display text-lg font-medium text-navy-950">
        {insight.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-700/70">
        {insight.excerpt}
      </p>
      <div className="mt-6 flex items-center justify-between text-xs text-navy-700/50">
        <span>
          {formatDate(insight.date)} · {insight.readTime}
        </span>
        <ArrowRight className="size-4 text-gold-600 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
