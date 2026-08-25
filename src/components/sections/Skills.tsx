import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-border/70 px-6 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 flex flex-col gap-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-accent">
              03. Skills
            </p>
            <h2
              id="skills-heading"
              className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
            >
              The analyst toolkit.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-muted">
            Spreadsheets, business intelligence, and query-driven analysis —
            end to end.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="rounded-lg border border-border/70 p-6 transition-colors duration-200 hover:bg-secondary/50 sm:p-8"
            >
              <h3 className="font-mono text-sm uppercase tracking-[0.18em] text-foreground">
                {group.label}
              </h3>
              <ul className="mt-6 flex flex-wrap gap-3" aria-label={group.label}>
                {group.skills.map((skill) => (
                  <li key={`${group.id}-${skill}`}>
                    <span className="inline-block rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors duration-200 hover:border-accent hover:text-accent">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
