import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { getUmamiCollectionUrl } from "./src/lib/umami-proxy";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async rewrites() {
    if (!process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID?.trim()) return [];

    return {
      beforeFiles: [
        {
          source: "/api/send",
          destination: getUmamiCollectionUrl().toString(),
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default withNextIntl(nextConfig);
