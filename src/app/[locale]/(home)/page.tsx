import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import Portfolio from "../../../views/Portfolio";
import { routing } from "../../../i18n/routing";
import { getSiteUrl } from "../../../lib/site";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const pathname = locale === "ka" ? "/ka" : "/";
  const siteUrl = new URL(getSiteUrl());
  const isKa = locale === "ka";
  const title = isKa
    ? "ლუკა შველიძე | Full Stack ვებ დეველოპერი"
    : "Luka Shvelidze | Full-Stack Web Developer";
  const description = isKa
    ? "ლუკა შველიძის პორტფოლიო: ვებგვერდები და ვებ-აპლიკაციები React, Next.js და Laravel ტექნოლოგიებით. გაეცანით პროექტებსა და გამოცდილებას."
    : "Luka Shvelidze (lukkshh) is a full-stack web developer. Explore his coding projects, programming experience, and work with React, Next.js, and Laravel.";

  return {
    title,
    description,
    keywords: isKa
      ? [
          "ლუკა შველიძე",
          "ვებ დეველოპერი",
          "სრულსტეკ დეველოპერი",
          "React",
          "Next.js",
          "Laravel",
          "lukkshh",
          "პროგრამირება",
          "კოდირება",
        ]
      : [
          "Luka Shvelidze",
          "lukkshh",
          "full-stack web developer",
          "software developer",
          "programming",
          "coding",
          "web development",
          "React developer",
          "Next.js developer",
          "Laravel developer",
        ],
    alternates: {
      canonical: pathname,
      languages: { en: "/", ka: "/ka" },
    },
    openGraph: {
      title,
      description,
      url: new URL(pathname, siteUrl),
      siteName: "Luka Shvelidze",
      locale: isKa ? "ka_GE" : "en_US",
      alternateLocale: isKa ? ["en_US"] : ["ka_GE"],
      type: "profile",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const siteUrl = new URL(getSiteUrl());
  const pageUrl = new URL(locale === "ka" ? "/ka" : "/", siteUrl);
  const personId = new URL("/#person", siteUrl).toString();
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": new URL("/#website", siteUrl).toString(),
        url: siteUrl.toString(),
        name: "Luka Shvelidze",
        inLanguage: ["en", "ka"],
      },
      {
        "@type": "ProfilePage",
        url: pageUrl.toString(),
        inLanguage: locale,
        mainEntity: {
          "@type": "Person",
          "@id": personId,
          name: "Luka Shvelidze",
          alternateName: ["ლუკა შველიძე", "lukkshh"],
          jobTitle: "Full-Stack Web Developer",
          url: siteUrl.toString(),
          sameAs: [
            "https://github.com/lukkshh",
            "https://www.linkedin.com/in/lukkshh/",
            "https://www.instagram.com/lukkshh/",
          ],
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Portfolio />
    </>
  );
}
