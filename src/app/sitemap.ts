import type { MetadataRoute } from "next";
import { site } from "@/lib/data/site";
import { services } from "@/lib/data/services";
import { insights } from "@/lib/data/insights";
import { jobs } from "@/lib/data/jobs";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/team",
    "/services",
    "/insights",
    "/careers",
    "/contact",
  ];

  const dynamicRoutes = [
    ...services.map((s) => `/services/${s.slug}`),
    ...insights.map((i) => `/insights/${i.slug}`),
    ...jobs.map((j) => `/careers/${j.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
