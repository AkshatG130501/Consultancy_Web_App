"use client";

import { useMemo, useState } from "react";
import { JobCard } from "@/components/cards/JobCard";
import { cn } from "@/lib/utils";
import type { Job } from "@/lib/data/jobs";

export function JobsList({ jobs }: { jobs: Job[] }) {
  const [region, setRegion] = useState<string>("All");

  const regions = useMemo(
    () => ["All", ...Array.from(new Set(jobs.map((j) => j.region)))],
    [jobs],
  );

  const filtered = useMemo(
    () => (region === "All" ? jobs : jobs.filter((j) => j.region === region)),
    [jobs, region],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {regions.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRegion(r)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              region === r
                ? "bg-gold-600 text-white"
                : "bg-cream-100 text-navy-800 hover:bg-cream-200",
            )}
          >
            {r}
          </button>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-4">
        {filtered.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-navy-950/15 p-10 text-center text-sm text-navy-700/60">
            No open roles in this region right now — check back soon or send us
            your CV for future mandates.
          </p>
        ) : (
          filtered.map((job) => <JobCard key={job.slug} job={job} />)
        )}
      </div>
    </div>
  );
}
