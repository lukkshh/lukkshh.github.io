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

export function getSiteHostname(requestHost?: string | null): string {
  if (requestHost) {
    try {
      return new URL(`http://${requestHost}`).hostname;
    } catch {
      // Fall back to the configured site URL if the Host header is malformed.
    }
  }

  return new URL(getSiteUrl()).hostname;
}
