const GITHUB_REPOS_URL =
  "https://api.github.com/users/kovvurujavidh/repos?sort=updated&per_page=4";

export interface GitHubRepository {
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}

function isGitHubRepository(value: unknown): value is GitHubRepository {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const repository = value as Record<string, unknown>;

  return (
    typeof repository.name === "string" &&
    typeof repository.full_name === "string" &&
    (typeof repository.description === "string" ||
      repository.description === null) &&
    typeof repository.html_url === "string" &&
    (typeof repository.language === "string" || repository.language === null) &&
    typeof repository.stargazers_count === "number" &&
    typeof repository.forks_count === "number"
  );
}

export async function getRecentRepos(): Promise<GitHubRepository[]> {
  try {
    const response = await fetch(GITHUB_REPOS_URL, {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return [];
    }

    const payload: unknown = await response.json();

    if (!Array.isArray(payload)) {
      return [];
    }

    return payload.filter(isGitHubRepository);
  } catch {
    return [];
  }
}
