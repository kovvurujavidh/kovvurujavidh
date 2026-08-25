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
  { background: string; accent: string }
> = {
  table: {
    background: "from-amber-200 via-parchment-50 to-red-100",
    accent: "bg-accent",
  },
  database: {
    background: "from-red-100 via-parchment-50 to-amber-200",
    accent: "bg-accent-warm",
  },
  chart: {
    background: "from-yellow-200 via-parchment-50 to-orange-100",
    accent: "bg-accent",
  },
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = iconByName[project.icon];
  const visualStyle = visualStyles[project.icon];

  return (
    <article
      className={cn(
        "group relative flex min-h-[31rem] flex-col overflow-hidden bg-card",
        "manga-shadow",
        project.featured && "lg:col-span-2",
      )}
    >
      <div className="wanted-stripe border-b-[3px] border-foreground bg-accent px-4 py-2 text-center">
        <span className="font-display text-4xl uppercase tracking-[0.18em] text-white">
          Wanted
        </span>
      </div>

      <div
        className={cn(
          "relative isolate flex min-h-56 flex-1 items-center justify-center overflow-hidden border-b-[3px] border-foreground bg-gradient-to-br transition-transform duration-300 ease-out group-hover:scale-[1.02] sm:min-h-64",
          visualStyle.background,
        )}
      >
        <div aria-hidden="true" className="map-grid absolute inset-0 -z-10 opacity-80" />
        <div
          aria-hidden="true"
          className={cn(
            "absolute size-36 rounded-full opacity-20 blur-3xl transition-transform duration-500 group-hover:scale-125",
            visualStyle.accent,
          )}
        />
        <Icon
          aria-hidden="true"
          className="relative size-20 text-foreground transition-transform duration-500 group-hover:scale-110"
          strokeWidth={1.5}
        />
        <span className="absolute left-5 top-5 font-mono text-xs font-bold tracking-[0.18em] text-foreground">
          PROJECT {String(index + 1).padStart(2, "0")}
        </span>
        <ArrowUpRight
          aria-hidden="true"
          className="absolute right-5 top-5 size-5 -translate-x-1 -translate-y-1 text-accent opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
        />
      </div>

      <div className="flex flex-col gap-5 p-6 sm:p-7">
        <div>
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-accent">
              {project.tool}
            </p>
            <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-muted">
              Bounty Board
            </p>
          </div>
          <h3 className="mt-3 text-4xl leading-none text-foreground">
            {project.title}
          </h3>
          <p className="mt-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-muted">
            Data voyage / Grand Line edition
          </p>
        </div>

        <p className="max-w-2xl text-sm font-semibold leading-7 text-foreground/80">
          {project.description}
        </p>

        <ul
          aria-label={`${project.title} technology stack`}
          className="flex flex-wrap gap-2"
        >
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="border-2 border-foreground bg-surface px-3 py-1.5 font-mono text-[0.68rem] font-bold text-foreground"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
