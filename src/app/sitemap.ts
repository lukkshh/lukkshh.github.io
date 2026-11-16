import type { MetadataRoute } from "next";
import { projects } from "../data/projects";
import { getPublicSiteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getPublicSiteUrl();

  if (!siteUrl) return [];

  const paths = ["", "/projects", ...projects.map(({ slug }) => `/projects/${slug}`)];

  return paths.flatMap((path) => {
    const en = new URL(path || "/", siteUrl).toString();
    const ka = new URL(`/ka${path}`, siteUrl).toString();
    const alternates = { languages: { en, ka } };

    return [
      { url: en, alternates },
      { url: ka, alternates },
    ];
  });
}
