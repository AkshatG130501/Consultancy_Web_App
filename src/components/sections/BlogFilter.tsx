"use client";

import { useState } from "react";
import type { Insight } from "@/lib/data/insights";
import { InsightCard } from "@/components/cards/InsightCard";
import { cn } from "@/lib/utils";

export function BlogFilter({
  insights,
  categories,
}: {
  insights: Insight[];
  categories: readonly string[];
}) {
  const [active, setActive] = useState<string>("All");
  const tabs = ["All", ...categories];

  const filtered =
    active === "All"
      ? insights
      : insights.filter((insight) => insight.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Filter blogs by category">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={active === tab}
            onClick={() => setActive(tab)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              active === tab
                ? "bg-gold-600 text-white"
                : "border border-navy-950/10 bg-white text-navy-700/80 hover:border-gold-500/40 hover:text-navy-950",
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((insight) => (
            <InsightCard key={insight.slug} insight={insight} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-navy-700/70">
          No blogs in this category yet — check back soon.
        </p>
      )}
    </div>
  );
}
