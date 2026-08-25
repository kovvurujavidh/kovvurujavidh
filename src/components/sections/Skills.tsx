import { BarChart3, Database, Sparkles, Table2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skillGroups } from "@/data/skills";

const groupIcons: Record<string, LucideIcon> = {
  "spreadsheets-bi": Table2,
  "data-query": Database,
};

const workflowSteps = ["Collect", "Shape", "Explain"] as const;

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-border/70 px-6 py-16 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-accent">
              03. Skills
            </p>
            <h2
              id="skills-heading"
              className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              The analyst toolkit.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted">
            Spreadsheets, business intelligence, and query-driven analysis —
            connected into one practical workflow.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="group relative isolate overflow-hidden rounded-3xl border border-border/80 bg-surface p-6 shadow-[0_18px_60px_rgb(74_51_38_/_0.08)] sm:p-8">
            <div
              aria-hidden="true"
              className="map-grid absolute inset-0 -z-10 opacity-60"
            />
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 -z-10 size-72 rounded-full bg-accent/10 blur-3xl transition-transform duration-700 group-hover:scale-125"
            />

            <div className="flex items-start justify-between gap-6">
              <div className="max-w-md">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent">
                  capability_map / 03
                </p>
                <h3 className="mt-5 text-3xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-4xl">
                  Raw data in.
                  <br />
                  <span className="text-accent">Clear action out.</span>
                </h3>
                <p className="mt-5 max-w-sm text-sm leading-6 text-muted">
                  A focused toolkit for cleaning messy inputs, finding the
                  signal, and turning it into a decision-ready story.
                </p>
              </div>

              <div className="relative hidden size-24 shrink-0 items-center justify-center sm:flex">
                <span
                  aria-hidden="true"
                  className="absolute inset-2 rounded-full border border-accent/20 transition-transform duration-700 group-hover:scale-125"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full border border-dashed border-accent/15 transition-transform duration-700 group-hover:rotate-45"
                />
                <span className="icon-tile flex size-14 items-center justify-center rounded-full text-accent transition-transform duration-500 group-hover:scale-110">
                  <Sparkles aria-hidden="true" className="size-6" strokeWidth={1.5} />
                </span>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-3">
              {workflowSteps.map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl border border-border/70 bg-background/55 p-3 transition-colors duration-300 group-hover:border-accent/30 sm:p-4"
                >
                  <p className="font-mono text-[0.62rem] text-accent">
                    0{index + 1}
                  </p>
                  <p className="mt-4 text-sm font-medium text-foreground">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-border/70 bg-background/45 p-4 sm:p-5">
              <div className="flex items-center justify-between gap-4 font-mono text-[0.65rem] uppercase tracking-[0.14em]">
                <span className="text-muted">analysis_loop</span>
                <span className="text-accent">SQL → BI</span>
              </div>
              <div
                aria-hidden="true"
                className="mt-4 h-2 overflow-hidden rounded-full bg-secondary"
              >
                <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-accent-warm via-accent to-accent" />
              </div>
            </div>
          </article>

          <div className="grid gap-4">
            {skillGroups.map((group, index) => {
              const Icon = groupIcons[group.id] ?? BarChart3;

              return (
                <article
                  key={group.id}
                  className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card p-5 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_18px_42px_rgb(74_51_38_/_0.1)] sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="icon-tile flex size-11 items-center justify-center rounded-full text-accent transition-transform duration-300 group-hover:scale-110">
                      <Icon aria-hidden="true" className="size-5" strokeWidth={1.6} />
                    </span>
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
                      stack_0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                    {group.label}
                  </h3>
                  <ul
                    aria-label={`${group.label} skills`}
                    className="mt-4 flex flex-wrap gap-2"
                  >
                    {group.skills.map((skill) => (
                      <li key={`${group.id}-${skill}`}>
                        <span className="inline-block rounded-full border border-border bg-background/50 px-3 py-1.5 text-xs text-muted transition-colors duration-200 hover:border-accent/50 hover:text-accent">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
