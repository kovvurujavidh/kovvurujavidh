import { ArrowUpRight, GitBranch } from "lucide-react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-t border-border/70 px-6 py-16 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-accent">
              01. Selected Projects
            </p>
            <h2
              id="projects-heading"
              className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Turning workforce data into clarity.
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4 sm:items-end">
            <p className="max-w-sm text-sm leading-6 text-muted sm:text-right">
              Three end-to-end HR analytics projects built across spreadsheets,
              databases, and business intelligence.
            </p>
            <a
              href="https://github.com/kovvurujavidh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border bg-surface/55 px-4 py-2 font-mono text-xs text-muted transition-[background-color,border-color,color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-white/65 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <GitBranch aria-hidden="true" size={15} strokeWidth={1.7} />
              Browse GitHub
              <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.7} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} index={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
