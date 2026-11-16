import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { preload } from "react-dom";
import { getSiteUrl } from "../lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Luka Shvelidze",
  description: "Luka Shvelidze, Full-Stack Developer",
  authors: [{ name: "Luka Shvelidze" }],
  keywords: [
    "Luka Shvelidze",
    "Full-Stack Developer",
    "Programming",
    "Coding",
    "Web Development",
    "Portfolio",
  ],
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico" },
  openGraph: {
    title: "Luka Shvelidze",
    description: "Luka Shvelidze, Full-Stack Developer",
    siteName: "Luka Shvelidze",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Luka Shvelidze",
    description: "Luka Shvelidze, Full-Stack Developer",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  const messages = await getMessages();
  preload("/fonts/inter.woff2", {
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  });
  preload(
    "/fonts/4UaRrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iq2oQCIlsw.woff2",
    { as: "font", type: "font/woff2", crossOrigin: "anonymous" },
  );

  return (
    <html lang={locale}>
      <head>
        <link rel="preload" as="image" href="/images/grid-pattern.svg" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/spotlight-left.svg" media="(min-width: 769px)" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/spotlight-right.svg" media="(min-width: 769px)" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/spotlight-left-mobile.svg" media="(max-width: 768px)" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/spotlight-right-mobile.svg" media="(max-width: 768px)" fetchPriority="high" />
      </head>
      <body className={`bg-[#000319] ${locale === "ka" ? "font-ge" : "font-en"}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
