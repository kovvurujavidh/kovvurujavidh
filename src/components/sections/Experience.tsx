import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-border/70 px-6 py-16 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-accent">
              02. Experience
            </p>
            <h2
              id="experience-heading"
              className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Where the work happens.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted">
            Live operational discipline at India Post, sharpened by hands-on
            analytics training.
          </p>
        </div>

        <ol className="relative space-y-8 border-l border-border/70 pl-7 sm:pl-9 md:last:border-transparent">
          {experience.map((item) => (
            <li key={item.id} className="relative">
              <span
                aria-hidden="true"
                className={`absolute -left-[2.31rem] top-2 h-3 w-3 rounded-full border-2 border-background sm:-left-[2.81rem] ${
                  item.current ? "bg-accent" : "bg-border"
                }`}
              />
              <div className="group rounded-3xl border border-transparent p-1 transition-colors duration-200 hover:border-border/50 hover:bg-secondary/50">
                <div className="flex flex-col gap-1 pt-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {item.role}
                  </h3>
                  <p className="font-mono text-xs tracking-wide text-muted">
                    {item.period}
                  </p>
                </div>
                <p className="mt-1 text-sm text-accent">
                  {item.company}
                  {item.location ? (
                    <span className="font-mono text-sm text-muted">
                      {" "}
                      · {item.location}
                    </span>
                  ) : null}
                </p>
                <ul className="mt-3 space-y-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-6 text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.65rem] h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
