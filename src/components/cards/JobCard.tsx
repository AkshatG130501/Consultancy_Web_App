import Link from "next/link";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";
import type { Job } from "@/lib/data/jobs";

export function JobCard({ job }: { job: Job }) {
  return (
    <Link
      href={`/careers/${job.slug}`}
      className="group flex flex-col justify-between gap-4 rounded-2xl border border-navy-950/8 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-gold-500/40 hover:shadow-lg hover:shadow-navy-950/5 sm:flex-row sm:items-center"
    >
      <div>
        <span className="inline-flex w-fit items-center rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-700">
          {job.department}
        </span>
        <h3 className="mt-3 font-serif-display text-lg font-medium text-navy-950">
          {job.title}
        </h3>
        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-navy-700/70">
          <span className="flex items-center gap-1.5">
            <MapPin className="size-3.5 text-gold-600" />
            {job.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Briefcase className="size-3.5 text-gold-600" />
            {job.type}
          </span>
        </div>
      </div>
      <span className="flex items-center gap-1.5 text-sm font-semibold text-gold-700 sm:shrink-0">
        View role
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
