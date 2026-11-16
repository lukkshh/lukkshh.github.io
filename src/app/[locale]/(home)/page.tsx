import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import Portfolio from "../../../views/Portfolio";
import { routing } from "../../../i18n/routing";
import { getSiteUrl } from "../../../lib/site";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const pathname = locale === "ka" ? "/ka" : "/";
  const siteUrl = new URL(getSiteUrl());

  return {
    alternates: {
      canonical: pathname,
      languages: { en: "/", ka: "/ka" },
    },
    openGraph: { url: new URL(pathname, siteUrl) },
    twitter: { card: "summary_large_image" },
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  return <Portfolio />;
}
