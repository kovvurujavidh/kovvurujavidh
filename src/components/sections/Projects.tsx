import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-t border-border/70 px-6 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 flex flex-col gap-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-accent">
              01. Selected Projects
            </p>
            <h2
              id="projects-heading"
              className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
            >
              Turning workforce data into clarity.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-muted">
            Three end-to-end HR analytics projects built across spreadsheets,
            databases, and business intelligence.
          </p>
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
