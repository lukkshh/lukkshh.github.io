"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { HiArrowLeft, HiArrowUpRight } from "react-icons/hi2";
import { projects, type Project } from "../../data/projects";
import { trackEvent } from "../../utils/analytics";

export default function ProjectDetail({ project, locale }: { project: Project; locale: string }) {
  const lang = locale === "ka" ? "ka" : "en";
  const lastVisitedSlug = useRef<string | null>(null);
  const related = projects
    .filter((item) => item.slug !== project.slug && item.category === project.category)
    .slice(0, 3);
  const t = useTranslations("ProjectsPage");
  const projectMetadata = {
    project_slug: project.slug,
    project_name: project.name.en,
    category: project.category,
  };

  useEffect(() => {
    if (lastVisitedSlug.current === project.slug) return;
    lastVisitedSlug.current = project.slug;
    trackEvent("project-detail-view", {
      project_slug: project.slug,
      project_name: project.name.en,
      category: project.category,
    });
  }, [project]);

  return (
    <>
      <main id="main-content" className="mx-auto w-full max-w-7xl px-4 pb-20 pt-20 md:pt-32 lg:pb-28">
        <Link className="inline-flex min-h-11 items-center gap-2 text-sm text-[var(--projects-muted)] transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--projects-accent)] active:scale-[0.98]" href={locale === "ka" ? "/ka/projects" : "/projects"} onClick={() => trackEvent("project-back-to-list", projectMetadata)}>
          <HiArrowLeft aria-hidden="true" className="h-4 w-4" />
          {t("backToProjects")}
        </Link>

        <header className="mt-5 grid items-end gap-8 md:mt-10 lg:mt-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
          <div className="pb-2">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[var(--projects-strong-text)]" translate="no">{project.name[lang]}</span>
              <span className="rounded-full border border-[var(--projects-accent-border)] bg-[var(--projects-accent-soft)] px-3 py-1.5 text-[var(--projects-accent-text)]">{t(`categories.${project.category}`)}</span>
            </div>
            <h1 className="mt-5 max-w-2xl text-balance text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl">{project.title[lang]}</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--projects-muted)]">{project.summary[lang]}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {project.liveUrl && <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[var(--projects-accent-border)] bg-[var(--projects-accent)] px-5 text-sm font-semibold text-[var(--projects-accent-foreground)] transition-colors hover:bg-[var(--projects-accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--projects-accent)] active:scale-[0.98]" href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("project-external-link-click", { ...projectMetadata, link_type: "live-demo" })}>{t("visitProject")}<HiArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>}
              {project.sourceUrl && <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 px-5 text-sm font-semibold text-white transition-colors hover:border-white/35 hover:bg-white/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--projects-accent)] active:scale-[0.98]" href={project.sourceUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("project-external-link-click", { ...projectMetadata, link_type: "github" })}>{t("viewSource")}<HiArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>}
            </div>
          </div>

          <figure className="relative aspect-[1.38] min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-[var(--projects-image-surface)] shadow-[var(--projects-image-shadow)]">
            <Image src={project.image} alt={`${project.name[lang]} — ${project.title[lang]}`} fill priority unoptimized={project.image.endsWith(".gif")} sizes="(max-width: 1024px) 100vw, 56vw" className="object-cover" />
            <figcaption className="sr-only">{project.name[lang]}: {project.summary[lang]}</figcaption>
          </figure>
        </header>

        <div className="mt-16 grid gap-12 border-t border-white/10 pt-10 md:mt-20 md:grid-cols-[minmax(0,1fr)_18rem] md:gap-16 md:pt-14">
          <div className="max-w-3xl">
            <section aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="text-2xl font-semibold text-white sm:text-3xl">{t("overview")}</h2>
              <p className="mt-5 text-base leading-8 text-[var(--projects-muted)] sm:text-lg">{project.description[lang]}</p>
            </section>
            {project.features && project.features.length > 0 && (
              <section className="mt-12" aria-labelledby="features-heading">
                <h2 id="features-heading" className="text-2xl font-semibold text-white sm:text-3xl">{t("whatItIncludes")}</h2>
                <ul className="mt-5 divide-y divide-white/10 border-y border-white/10">
                  {project.features.map((feature) => <li className="flex items-start gap-4 py-4 text-base leading-7 text-[var(--projects-copy)]" key={feature.en}><span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--projects-accent)]" />{feature[lang]}</li>)}
                </ul>
              </section>
            )}
            {project.role && (
              <section className="mt-12" aria-labelledby="role-heading">
                <h2 id="role-heading" className="text-2xl font-semibold text-white sm:text-3xl">{t("role")}</h2>
                <p className="mt-5 text-base leading-8 text-[var(--projects-muted)] sm:text-lg">{project.role[lang]}</p>
              </section>
            )}
          </div>

          <aside className="h-fit rounded-2xl border border-white/10 bg-gradient-to-br from-[var(--projects-surface-raised)] to-[var(--projects-panel-deep)] p-5 sm:p-6" aria-labelledby="technology-heading">
            <h2 id="technology-heading" className="text-base font-semibold text-white">{t("technologies")}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => <li key={technology} translate="no" className="rounded-full bg-[var(--projects-tag)] px-3 py-2 text-sm text-[var(--projects-tag-text)]">{technology}</li>)}
            </ul>
            <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-6 text-[var(--projects-subtle)]">{t(`categories.${project.category}`)}</p>
          </aside>
        </div>

        {related.length > 0 && (
          <section className="mt-20 border-t border-white/10 pt-10 md:mt-28 md:pt-14" aria-labelledby="related-heading">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 id="related-heading" className="mt-2 text-2xl font-semibold text-white sm:text-3xl">{t("relatedProjects")}</h2>
              </div>
              <Link className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[var(--projects-accent)] transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--projects-accent)] active:scale-[0.98]" href={locale === "ka" ? "/ka/projects" : "/projects"} onClick={() => trackEvent("project-back-to-list", projectMetadata)}>{t("allProjects")}<HiArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
            </div>
            <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {related.map((item) => <Link key={item.slug} href={`${locale === "ka" ? "/ka" : ""}/projects/${item.slug}`} onClick={() => trackEvent("project-related-click", { ...projectMetadata, related_project_slug: item.slug, related_project_name: item.name.en })} className="group overflow-hidden rounded-2xl border border-white/10 bg-[var(--projects-surface)] transition-[border-color,transform] duration-200 hover:-translate-y-1 hover:border-[var(--projects-accent-border)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--projects-accent)] motion-reduce:transform-none active:scale-[0.99]">
                <div className="relative aspect-[1.7] overflow-hidden bg-[var(--projects-image-surface)]"><Image src={item.image} alt="" fill unoptimized={item.image.endsWith(".gif")} sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /></div>
                <div className="p-5"><p className="text-xs text-[var(--projects-muted)]">{t(`categories.${item.category}`)}</p><h3 className="mt-2 text-lg font-semibold text-white transition-colors group-hover:text-[var(--projects-accent)]">{item.name[lang]}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-[var(--projects-muted)]">{item.summary[lang]}</p></div>
              </Link>)}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
