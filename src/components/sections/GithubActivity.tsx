import { GitBranch, Star } from "lucide-react";
import { getRecentRepos } from "@/lib/github";

export async function GithubActivity() {
  const repositories = await getRecentRepos();

  return (
    <section
      id="github"
      aria-label="GitHub Repositories"
      className="border-t border-border/70 px-6 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 flex flex-col gap-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-accent">
              04. GitHub Activity
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Recent work in the open.
            </h2>
          </div>
          <a
            href="https://github.com/kovvurujavidh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-fit items-center gap-2 rounded-lg border border-border px-4 py-2 font-mono text-sm text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <GitBranch aria-hidden="true" size={17} strokeWidth={1.8} />
            View profile
          </a>
        </div>

        {repositories.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {repositories.map((repository) => (
              <a
                key={repository.full_name}
                href={repository.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-52 flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-2xl hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:p-7"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="break-all font-mono text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                      {repository.name}
                    </h3>
                    <GitBranch
                      aria-hidden="true"
                      className="mt-1 size-5 shrink-0 text-muted transition-colors group-hover:text-accent"
                      strokeWidth={1.7}
                    />
                  </div>
                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-muted">
                    {repository.description ?? "No description provided."}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-xs text-muted">
                  {repository.language ? (
                    <span className="inline-flex items-center gap-2">
                      <span
                        aria-hidden="true"
                        className="size-2 rounded-full bg-accent"
                      />
                      {repository.language}
                    </span>
                  ) : null}
                  <span className="inline-flex items-center gap-1.5">
                    <Star aria-hidden="true" size={14} strokeWidth={1.7} />
                    {repository.stargazers_count}
                  </span>
                  <span>{repository.forks_count} forks</span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-border/70 bg-card p-6 text-sm leading-7 text-muted sm:p-8">
            Unable to load recent activity. Check out my{" "}
            <a
              href="https://github.com/kovvurujavidh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              GitHub profile directly
            </a>
            .
          </div>
        )}
      </div>
    </section>
  );
}
