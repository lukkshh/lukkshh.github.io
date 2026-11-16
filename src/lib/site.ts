export function getPublicSiteUrl(): URL | undefined {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;

  if (configuredUrl) return new URL(configuredUrl);
  if (vercelDomain) return new URL(`https://${vercelDomain}`);
  return undefined;
}

export function getSiteUrl(): string {
  return (getPublicSiteUrl() ?? new URL("http://localhost:3000")).toString();
}
