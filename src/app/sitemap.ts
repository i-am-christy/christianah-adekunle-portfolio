import type { MetadataRoute } from "next"

import { projects } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://christianahadekunle.com"
  const staticRoutes = ["", "/about", "/work", "/expertise", "/writing", "/contact"]
  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
    })),
    ...projects.map((project) => ({
      url: `${base}/work/${project.slug}`,
      lastModified: new Date(),
    })),
  ]
}
