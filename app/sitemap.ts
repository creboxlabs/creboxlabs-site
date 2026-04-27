import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE.lastUpdated);
  const routes = ["", "/about", "/contact", "/privacy", "/terms"] as const;

  return routes.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1.0 : 0.7,
  }));
}
