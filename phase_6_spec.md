# PHASE 6 SPECIFICATION - GitHub Integration & API Connections

**ATTENTION CODEX:** You can begin this phase immediately since Phase 4 is complete.

## 1. Objective
Implement real-time features by connecting to the GitHub REST API. This section will display Kovvuru Javidh's most recently updated public repositories to show continuous coding activity.

## 2. Files/Components Involved
*   `src/app/page.tsx` (MODIFY - import GitHub Activity section)
*   `src/components/sections/GithubActivity.tsx` (NEW)
*   `src/lib/github.ts` (NEW - API fetching logic)

## 3. Technical Approach
1.  **API Logic (`github.ts`)**:
    *   Create a function `getRecentRepos()` that fetches data from `https://api.github.com/users/kovvurujavidh/repos?sort=updated&per_page=4`.
    *   Since Next.js App Router runs fetch requests on the server, you don't need to worry about exposing CORS.
    *   Use `next: { revalidate: 3600 }` to cache the data for an hour to prevent rate limiting.
    *   Add basic error handling (try/catch) so the site doesn't break if GitHub is down. Return an empty array on error.
2.  **UI Component (`GithubActivity.tsx`)**:
    *   This MUST be an async Server Component: `export async function GithubActivity() { ... }`.
    *   Call `getRecentRepos()` inside the component.
    *   Render a simple grid or list of the repositories showing: Repo Name, Description, Primary Language (if available), and a link to the repo.
    *   Use a modern, minimal card style for each repo (dark background, subtle border).
3.  **Integration**:
    *   Add `<GithubActivity />` into `src/app/page.tsx` below the `<Projects />` section.

## 4. Dependencies
*   Use native `fetch`. No new dependencies required.
*   `lucide-react` (Use the `Github`, `Star`, or `GitBranch` icons for decoration).

## 5. UI Requirements
*   **Aesthetic**: Keep it consistent with the Bento Grid and Hero section. Minimal, tech-focused.
*   **Typography**: Use the `JetBrains Mono` font for the repository names and the language indicator.
*   **Empty State**: If the fetch fails or returns 0 repos, display a subtle "Unable to load recent activity. Check out my GitHub profile directly." message instead of crashing.

## 6. Animation Requirements
*   No heavy animations required. Simple CSS hover states on the repository cards (e.g., border color change or slight lift).

## 7. Responsive Requirements
*   A 2x2 grid on desktop (`grid-cols-2`), falling back to a 1-column stack on mobile.

## 8. Accessibility Requirements
*   Add `aria-label="GitHub Repositories"` to the main section.
*   Ensure all links to GitHub open in a new tab (`target="_blank" rel="noopener noreferrer"`).

## 9. Performance Requirements
*   **CRITICAL**: You must use Server Components for this. Do not use `useEffect` or `useState` to fetch this data on the client side, as that hurts SEO and performance. Fetch it securely on the server.

## 10. Acceptance Criteria
*   The page successfully renders the latest 4 repositories from `kovvurujavidh`.
*   The build succeeds (no unhandled promises or strict TypeScript errors from the GitHub API response shape).

## 11. Testing Requirements
*   Verify that clicking a repository correctly navigates to the live GitHub URL.

---
**INSTRUCTIONS**: Please read this spec and execute Phase 6.
