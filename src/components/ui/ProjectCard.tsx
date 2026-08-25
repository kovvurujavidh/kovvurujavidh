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
  { background: string; icon: string; accent: string }
> = {
  table: {
    background: "from-blue-500/20 via-card to-cyan-400/5",
    icon: "text-blue-300",
    accent: "bg-blue-400",
  },
  database: {
    background: "from-amber-500/20 via-card to-orange-400/5",
    icon: "text-amber-300",
    accent: "bg-amber-400",
  },
  chart: {
    background: "from-emerald-500/20 via-card to-teal-400/5",
    icon: "text-emerald-300",
    accent: "bg-emerald-400",
  },
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = iconByName[project.icon];
  const visualStyle = visualStyles[project.icon];

  return (
    <article
      className={cn(
        "group relative flex min-h-[29rem] flex-col overflow-hidden rounded-2xl border border-border bg-card transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-2xl hover:shadow-black/20",
        project.featured && "lg:col-span-2",
      )}
    >
      <div
        className={cn(
          "relative isolate flex min-h-56 flex-1 items-center justify-center overflow-hidden bg-gradient-to-br transition-transform duration-500 ease-out group-hover:scale-[1.03] sm:min-h-64",
          visualStyle.background,
        )}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:2rem_2rem]"
        />
        <div
          aria-hidden="true"
          className={cn(
            "absolute size-36 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-125",
            visualStyle.accent,
            "opacity-10",
          )}
        />
        <Icon
          aria-hidden="true"
          className={cn(
            "relative size-20 stroke-[1.2] transition-transform duration-500 group-hover:scale-110",
            visualStyle.icon,
          )}
        />
        <span className="absolute left-6 top-6 font-mono text-xs tracking-[0.2em] text-muted/80">
          {String(index + 1).padStart(2, "0")} / {project.tool.toUpperCase()}
        </span>
        <ArrowUpRight
          aria-hidden="true"
          className="absolute right-6 top-6 size-5 -translate-x-1 -translate-y-1 text-foreground opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
        />
      </div>

      <div className="flex flex-col gap-5 border-t border-border/70 p-6 sm:p-7">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            {project.tool}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
            {project.title}
          </h3>
        </div>

        <p className="max-w-2xl text-sm leading-7 text-muted">
          {project.description}
        </p>

        <ul aria-label={`${project.title} technology stack`} className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-border bg-secondary px-3 py-1.5 font-mono text-[0.68rem] text-muted"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
