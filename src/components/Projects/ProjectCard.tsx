"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { HiArrowUpRight } from "react-icons/hi2";
import type { Project } from "../../data/projects";
import { trackEvent } from "../../utils/analytics";

export default function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const locale = useLocale();
  const t = useTranslations("ProjectsPage");
  const lang = locale === "ka" ? "ka" : "en";
  const href = `${locale === "ka" ? "/ka" : ""}/projects/${project.slug}`;
  const title = project.title[lang];
  const alt = `${project.name[lang]} — ${title}`;
  const trackOpen = (clickTarget: "image" | "title" | "case-study") => trackEvent("project-card-click", {
    project_slug: project.slug,
    project_name: project.name.en,
    category: project.category,
    click_target: clickTarget,
  });

  return (
    <article className={`group flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-[var(--projects-card-outline)] bg-gradient-to-br from-[var(--projects-surface-raised)] to-[var(--projects-surface-deep)] shadow-[var(--projects-card-shadow)] transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-[var(--projects-accent-border)] hover:shadow-[var(--projects-card-hover-shadow)] motion-reduce:transform-none ${featured ? "lg:flex-row" : ""}`}>
      <Link className={`relative block overflow-hidden bg-[var(--projects-image-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--projects-accent)] ${featured ? "aspect-[1.7] lg:aspect-auto lg:min-h-[340px] lg:w-[52%]" : "aspect-[1.7]"}`} href={href} aria-label={`${t("viewProject")}: ${project.name[lang]}`} onClick={() => trackOpen("image")}>
        <Image
          className="object-cover"
          src={project.image}
          alt={alt}
          fill
          priority={featured}
          unoptimized={project.image.endsWith(".gif")}
          sizes={featured ? "(max-width: 1024px) 100vw, 52vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        />
      </Link>
      <div className={`flex flex-1 flex-col p-5 sm:p-6 ${featured ? "lg:justify-center lg:p-8" : ""}`}>
        <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--projects-muted)]">
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">{t(`categories.${project.category}`)}</span>
          {featured && project.featured && <span className="rounded-full border border-[var(--projects-accent-border)] bg-[var(--projects-accent-soft)] px-3 py-1.5 text-[var(--projects-accent-bright)]">{t("featured")}</span>}
        </div>
        <h2 className={`mt-4 font-bold leading-tight text-white ${featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>
          <Link className="rounded-sm transition-colors hover:text-[var(--projects-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--projects-accent)]" href={href} translate="no" onClick={() => trackOpen("title")}>{project.name[lang]}</Link>
        </h2>
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={t("technologies")}>
          {project.technologies.slice(0, featured ? 10 : 5).map((technology) => (
            <li className="rounded-full bg-[var(--projects-tag)] px-2.5 py-1 text-[11px] text-[var(--projects-tag-text)] sm:text-xs" key={technology} translate="no">{technology}</li>
          ))}
        </ul>
        <p className={`mt-3 leading-relaxed text-[var(--projects-muted)] ${featured ? "text-base sm:text-lg" : "line-clamp-2 text-sm sm:text-[15px]"}`}>{project.summary[lang]}</p>
        <Link className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 pt-4 text-sm font-semibold text-[var(--projects-accent)] transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--projects-accent)] active:scale-[0.98]" href={href} onClick={() => trackOpen("case-study")}>
          {t("readCaseStudy")}
          <HiArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
        </Link>
      </div>
    </article>
  );
}
