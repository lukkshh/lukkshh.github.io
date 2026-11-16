import Link from "next/link";
import parse from "html-react-parser";
import { useLocale, useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import ProjectCard from "../components/Projects/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  const locale = useLocale();
  const t = useTranslations("Projects");
  const pageT = useTranslations("ProjectsPage");
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" className="projects-theme w-full px-4 text-white">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8 md:gap-10">
        <h2 className="text-center text-2xl font-bold md:text-5xl">{parse(t.raw("Title") as string)}</h2>
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
          {projects.slice(0, 3).map((project) => (
            <motion.div
              key={project.slug}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="min-w-0"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        <Link
          href={locale === "ka" ? "/ka/projects" : "/projects"}
          className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[var(--projects-outline)] bg-gradient-to-br from-[var(--projects-surface-raised)] to-[var(--projects-surface-deep)] px-5 text-sm font-semibold text-[var(--projects-accent)] transition-colors hover:border-[var(--projects-accent-border)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--projects-accent)] active:scale-[0.98]"
        >
          {pageT("allProjects")}
          <HiArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
