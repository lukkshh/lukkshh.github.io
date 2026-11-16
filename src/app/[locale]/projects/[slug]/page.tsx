import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import ProjectDetail from "../../../../components/Projects/ProjectDetail";
import { getProjectBySlug } from "../../../../data/projects";
import { routing } from "../../../../i18n/routing";
import { getSiteUrl } from "../../../../lib/site";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const language = locale === "ka" ? "ka" : "en";
  const title = `${project.name[language]} | Luka Shvelidze`;
  const description = project.summary[language];
  const pathname = `${locale === "ka" ? "/ka" : ""}/projects/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: pathname,
      languages: {
        en: `/projects/${slug}`,
        ka: `/ka/projects/${slug}`,
      },
    },
    openGraph: { title, description, url: new URL(pathname, getSiteUrl()), type: "article", images: [{ url: project.image }] },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  setRequestLocale(locale);

  return (
    <div className="projects-theme relative isolate min-h-screen overflow-hidden bg-[var(--projects-canvas)] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 bg-[url(/images/grid-pattern.svg)] bg-top opacity-25" />
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 -z-10 h-[36rem] w-[50rem] bg-[image:var(--projects-detail-glow)]" />
      <a href="#main-content" className="sr-only z-50 rounded-lg bg-[var(--projects-accent)] px-4 py-3 text-[var(--projects-accent-foreground)] focus:fixed focus:left-4 focus:top-4 focus:not-sr-only active:scale-[0.98]">{locale === "ka" ? "შინაარსზე გადასვლა" : "Skip to content"}</a>
      <Header />
      <ProjectDetail project={project} locale={locale} />
      <Footer />
    </div>
  );
}
