import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ProjectsBrowser from "../../../components/Projects/ProjectsBrowser";
import { routing } from "../../../i18n/routing";
import { getSiteUrl } from "../../../lib/site";

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function firstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) notFound();

  const title = locale === "ka" ? "პროექტები | Luka Shvelidze" : "Projects | Luka Shvelidze";
  const description = locale === "ka"
    ? "ლუკა შველიძის შერჩეული ვებპროექტები და მათი ტექნიკური ისტორიები."
    : "Selected web projects by Luka Shvelidze, with the thinking and technology behind each one.";
  const pathname = locale === "ka" ? "/ka/projects" : "/projects";

  return {
    title,
    description,
    alternates: { canonical: pathname, languages: { en: "/projects", ka: "/ka/projects" } },
    openGraph: { title, description, url: new URL(pathname, getSiteUrl()), type: "website" },
  };
}

export default async function ProjectsPage({ params, searchParams }: PageProps) {
  const [{ locale }, filters] = await Promise.all([params, searchParams]);
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) notFound();
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "ProjectsPage" });
  const type = firstValue(filters.type);
  const search = firstValue(filters.q);
  const query = new URLSearchParams();
  if (type) query.set("type", type);
  if (search) query.set("q", search);
  return (
    <div className="projects-theme relative isolate min-h-screen overflow-hidden bg-[var(--projects-canvas)] text-white">
      <a href="#main-content" className="sr-only z-50 rounded-lg bg-[var(--projects-accent)] px-4 py-3 text-[var(--projects-accent-foreground)] focus:fixed focus:left-4 focus:top-4 focus:not-sr-only active:scale-[0.98]">{locale === "ka" ? "შინაარსზე გადასვლა" : "Skip to content"}</a>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 bg-[url(/images/grid-pattern.svg)] bg-top opacity-35" />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[40rem] w-[60rem] -translate-x-1/2 bg-[image:var(--projects-listing-glow)]" />
      <Header />

      <main id="main-content" className="mx-auto w-full max-w-7xl px-5 pb-10 pt-28 sm:px-8 sm:pt-32 lg:px-12">
        <h1 className="sr-only">{t("accessibleTitle")}</h1>
        <ProjectsBrowser initialType={type ?? "all"} initialQuery={search ?? ""} />
      </main>
      <Footer />
    </div>
  );
}
