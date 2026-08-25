export function Now() {
  return (
    <section
      id="now"
      aria-labelledby="now-heading"
      className="border-t border-border/70 px-6 py-12 sm:px-8 sm:py-16 lg:px-12"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-3 rounded-3xl border border-border/70 bg-surface p-5 transition-colors duration-200 hover:bg-secondary/50 sm:flex-row sm:items-center sm:gap-5 sm:p-6">
          <span className="relative flex h-3 w-3 shrink-0" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
          </span>
          <div>
            <h2
              id="now-heading"
              className="font-mono text-sm uppercase tracking-[0.18em] text-accent"
            >
              Now
            </h2>
            <p className="mt-1.5 text-sm leading-6 text-muted sm:text-base">
              Currently working as an Assistant Branch Postmaster at India Post
              while seeking full-time Data Analyst roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
