export default function Home() {
  return (
    <section
      id="about"
      aria-labelledby="setup-heading"
      className="flex min-h-screen items-center justify-center px-6 py-16 sm:px-8"
    >
      <section className="w-full max-w-3xl rounded-lg border bg-surface px-6 py-12 shadow-2xl shadow-black/20 sm:px-12">
        <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-accent">
          Phase 01 / Architecture &amp; Design System
        </p>
        <h1
          id="setup-heading"
          className="max-w-2xl text-4xl font-semibold tracking-tight text-offwhite sm:text-6xl"
        >
          Kovvuru Javidh - Data Analyst Portfolio Setup
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          A dark-first Next.js foundation for presenting decision-ready dashboards,
          analytical projects, and data storytelling work.
        </p>
      </section>
    </section>
  );
}
