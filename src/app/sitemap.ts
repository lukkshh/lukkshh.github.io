import type { MetadataRoute } from "next";
import { getPublicSiteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getPublicSiteUrl();

  if (!siteUrl) return [];

  const urls = [new URL("/", siteUrl), new URL("/ka", siteUrl)];
  return urls.map((url) => ({
    url: url.toString(),
    alternates: {
      languages: {
        en: urls[0].toString(),
        ka: urls[1].toString(),
      },
    },
  }));
}
