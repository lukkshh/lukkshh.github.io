"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { HiMagnifyingGlass, HiXMark } from "react-icons/hi2";
import ProjectCard from "./ProjectCard";
import { projects, projectCategories, type ProjectCategory } from "../../data/projects";

export default function ProjectsBrowser({ initialType = "all", initialQuery = "" }: { initialType?: string; initialQuery?: string }) {
  const locale = useLocale();
  const t = useTranslations("ProjectsPage");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const requestedType = searchParams.get("type") ?? initialType;
  const selectedType = requestedType === "personal" || requestedType === "freelance" || requestedType === "professional" ? requestedType : "all";
  const query = searchParams.get("q") ?? initialQuery;

  const setFilters = (type: string, q: string, history: "push" | "replace") => {
    const params = new URLSearchParams();
    if (type !== "all") params.set("type", type);
    if (q.trim()) params.set("q", q);
    const search = params.toString();
    router[history](search ? `${pathname}?${search}` : pathname, { scroll: false });
  };

  const normalizedQuery = query.trim().toLocaleLowerCase(locale);
  const language = locale === "ka" ? "ka" : "en";
  const matchingProjects = projects.filter((project) => {
    const categoryMatches = selectedType === "all" || project.category === selectedType;
    const searchable = [project.name[language], project.title[language], project.summary[language], project.description[language], ...project.technologies]
      .join(" ")
      .toLocaleLowerCase(locale);
    return categoryMatches && searchable.includes(normalizedQuery);
  });
  const featuredProject = selectedType === "all" && !normalizedQuery ? matchingProjects.find((project) => project.featured) : undefined;
  const remainingProjects = featuredProject ? matchingProjects.filter((project) => project.slug !== featuredProject.slug) : matchingProjects;

  return (
    <>
      <section className="flex flex-col gap-5 border-y border-white/10 py-5 lg:flex-row lg:items-center lg:justify-between" aria-label={t("filterProjects")}>
        <div className="flex flex-wrap gap-2" role="group" aria-label={t("filterByCategory")}>
          <button type="button" className={`min-h-11 rounded-full border px-4 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--projects-accent)] active:scale-[0.98] ${selectedType === "all" ? "border-[var(--projects-accent-border)] bg-[var(--projects-accent-soft)] text-white" : "border-white/10 text-[var(--projects-muted)] hover:border-white/25 hover:text-white"}`} aria-pressed={selectedType === "all"} onClick={() => setFilters("all", query, "push")}>{t("categories.all")}</button>
          {projectCategories.map((category: ProjectCategory) => (
            <button key={category} type="button" className={`min-h-11 rounded-full border px-4 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--projects-accent)] active:scale-[0.98] ${selectedType === category ? "border-[var(--projects-accent-border)] bg-[var(--projects-accent-soft)] text-white" : "border-white/10 text-[var(--projects-muted)] hover:border-white/25 hover:text-white"}`} aria-pressed={selectedType === category} onClick={() => setFilters(category, query, "push")}>{t(`categories.${category}`)}</button>
          ))}
        </div>
        <label className="flex min-h-12 w-full items-center gap-3 rounded-xl border border-white/10 bg-[var(--projects-surface)] px-4 text-[var(--projects-muted)] transition-colors focus-within:border-[var(--projects-accent-border)] lg:max-w-sm">
          <HiMagnifyingGlass aria-hidden="true" className="h-5 w-5 shrink-0" />
          <span className="sr-only">{t("searchLabel")}</span>
          <input className="min-w-0 flex-1 bg-transparent text-base text-white outline-none placeholder:text-[var(--projects-placeholder)]" type="search" name="q" value={query} placeholder={t("searchPlaceholder")} onChange={(event) => setFilters(selectedType, event.target.value, "replace")} />
          {query && <button type="button" className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-[var(--projects-muted)] transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--projects-accent)] active:scale-[0.98]" onClick={() => setFilters(selectedType, "", "replace")} aria-label={t("clearSearch")}><HiXMark aria-hidden="true" className="h-5 w-5" /></button>}
        </label>
      </section>

      <p className="mt-6 text-sm text-[var(--projects-subtle)]" aria-live="polite">{t("resultCount", { count: matchingProjects.length })}</p>
      {featuredProject && <div className="mt-5"><ProjectCard project={featuredProject} featured /></div>}
      {remainingProjects.length > 0 ? (
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
          {remainingProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      ) : !featuredProject ? (
        <div className="mt-5 rounded-3xl border border-white/10 bg-[var(--projects-surface)] px-6 py-14 text-center">
          <p className="text-xl font-semibold text-white">{t("emptyTitle")}</p>
          <span className="mt-2 block text-[var(--projects-muted)]">{t("emptyDescription")}</span>
          <button type="button" className="mt-6 min-h-11 rounded-full border border-[var(--projects-accent-border)] px-5 text-sm font-medium text-[var(--projects-accent)] transition-colors hover:bg-[var(--projects-accent-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--projects-accent)] active:scale-[0.98]" onClick={() => setFilters("all", "", "push")}>{t("clearFilters")}</button>
        </div>
      ) : null}
    </>
  );
}
