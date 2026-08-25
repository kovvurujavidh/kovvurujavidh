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
  { background: string; glow: string; icon: string }
> = {
  table: {
    background: "from-cyan-500/10 via-zinc-900/40 to-transparent",
    glow: "bg-cyan-500",
    icon: "text-cyan-300",
  },
  database: {
    background: "from-violet-500/10 via-zinc-900/40 to-transparent",
    glow: "bg-violet-500",
    icon: "text-violet-300",
  },
  chart: {
    background: "from-sky-500/10 via-zinc-900/40 to-transparent",
    glow: "bg-sky-500",
    icon: "text-sky-300",
  },
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = iconByName[project.icon];
  const visualStyle = visualStyles[project.icon];

  return (
    <article
      className={cn(
        "group relative flex min-h-[31rem] flex-col overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm",
        "transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]",
        project.featured && "lg:col-span-2",
      )}
    >
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent"
      />

      <div
        className={cn(
          "relative isolate flex min-h-56 flex-1 items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br transition-transform duration-300 ease-out group-hover:scale-[1.02] sm:min-h-64",
          visualStyle.background,
        )}
      >
        <div
          aria-hidden="true"
          className="map-grid absolute inset-0 -z-10 opacity-60"
        />
        <div
          aria-hidden="true"
          className={cn(
            "absolute size-36 rounded-full opacity-20 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-30",
            visualStyle.glow,
          )}
        />
        <Icon
          aria-hidden="true"
          className={cn(
            "relative size-20 stroke-[1.25] transition-transform duration-500 group-hover:scale-110",
            visualStyle.icon,
          )}
        />
        <span className="absolute left-5 top-5 font-mono text-xs tracking-[0.18em] text-muted">
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
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              {project.tool}
            </p>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
              Case Study
            </p>
          </div>
          <h3 className="mt-3 text-4xl font-semibold leading-none text-foreground">
            {project.title}
          </h3>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-muted">
            Analytics engineering
          </p>
        </div>

        <p className="max-w-2xl text-sm leading-7 text-zinc-300">
          {project.description}
        </p>

        <ul aria-label={`${project.title} technology stack`} className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[0.68rem] text-zinc-300 transition-colors group-hover:border-white/20"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
