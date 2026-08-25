import { ArrowUpRight, BarChart3, Database, Table2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Project, ProjectIconName } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const iconByName: Record<ProjectIconName, LucideIcon> = {
  table: Table2,
  database: Database,
  chart: BarChart3,
};

const visualStyles: Record<
  ProjectIconName,
  { background: string; accent: string; icon: string; iconShell: string; label: string }
> = {
  table: {
    background: "from-accent/10 via-card to-surface-raised/20",
    accent: "bg-accent",
    icon: "text-foreground",
    iconShell: "border-accent/30 shadow-[0_0_34px_-10px_rgb(200_111_82_/_0.38)]",
    label: "text-accent",
  },
  database: {
    background: "from-accent-warm/10 via-card to-surface-raised/20",
    accent: "bg-accent-warm",
    icon: "text-foreground",
    iconShell: "border-accent-warm/40 shadow-[0_0_34px_-10px_rgb(217_155_130_/_0.38)]",
    label: "text-accent",
  },
  chart: {
    background: "from-accent-violet/10 via-card to-surface-raised/20",
    accent: "bg-accent-violet",
    icon: "text-foreground",
    iconShell: "border-accent-violet/35 shadow-[0_0_34px_-10px_rgb(168_141_126_/_0.35)]",
    label: "text-accent",
  },
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = iconByName[project.icon];
  const visualStyle = visualStyles[project.icon];

  return (
    <article
      className={cn(
        "group relative flex min-h-[22rem] flex-col overflow-hidden rounded-3xl border border-border bg-card transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_0_32px_-8px_rgb(200_111_82_/_0.22)]",
        project.featured && "lg:col-span-2",
      )}
    >
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={project.linkLabel}
        className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
      >
        <div
          aria-hidden="true"
          className="h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-70"
        />

        <div className="flex items-center justify-between border-b border-border/70 px-5 py-4 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
          <span className="text-accent">
            project_{String(index + 1).padStart(2, "0")}
          </span>
          <span>open_source</span>
        </div>

        <div
          className={cn(
            "relative isolate flex min-h-40 flex-1 items-center justify-center overflow-hidden border-b border-border/70 bg-gradient-to-br transition-transform duration-500 group-hover:scale-[1.02] sm:min-h-48",
            visualStyle.background,
          )}
        >
          {project.image ? (
            <div
              role="img"
              aria-label={project.image.alt}
              className="project-image-drift absolute inset-[-5%] bg-cover bg-center bg-no-repeat opacity-85 transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url("${project.image.src}")` }}
            />
          ) : null}
          <div
            aria-hidden="true"
            className={cn(
              "map-grid absolute inset-0 -z-10 opacity-60",
              project.image && "opacity-20",
            )}
          />
          {project.image ? (
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent"
            />
          ) : null}
          <div
            aria-hidden="true"
            className="project-media-sheen absolute inset-y-0 -left-1/3 z-10 w-1/3 -skew-x-12 bg-white/30 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
          />
          <div
            aria-hidden="true"
            className={cn(
              "absolute size-28 rounded-full opacity-25 blur-3xl transition-transform duration-500 group-hover:scale-125",
              visualStyle.accent,
            )}
          />
          <div
            className={cn(
              "icon-tile relative z-20 flex size-[4.5rem] items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110",
              visualStyle.iconShell,
            )}
          >
            <Icon
              aria-hidden="true"
              className={cn("relative size-11 stroke-[1.35]", visualStyle.icon)}
            />
          </div>
          <span className="absolute bottom-3 left-5 z-20 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
            {project.tool} / analytics module
          </span>
          <ArrowUpRight
            aria-hidden="true"
            className={cn(
              "absolute right-5 top-5 z-20 size-5 -translate-x-1 -translate-y-1 opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100",
              visualStyle.label,
            )}
          />
        </div>

        <div className="flex flex-col gap-4 p-5 sm:p-6">
          <div>
            <div className="flex items-center justify-between gap-4">
              <p className={cn("font-mono text-xs uppercase tracking-[0.18em]", visualStyle.label)}>
                {project.tool}
              </p>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
                github_repo
              </p>
            </div>
            <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-tight text-foreground">
              {project.title}
            </h3>
          </div>

          <p className="max-w-2xl text-sm leading-6 text-muted">
            {project.description}
          </p>

          <div className="mt-auto flex items-end justify-between gap-4">
            <ul
              aria-label={`${project.title} technology stack`}
              className="flex flex-wrap gap-2"
            >
              {project.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full border border-border bg-secondary px-3 py-1.5 font-mono text-[0.68rem] text-muted"
                >
                  {technology}
                </li>
              ))}
            </ul>
            <span className="shrink-0 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent">
              open ↗
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}
