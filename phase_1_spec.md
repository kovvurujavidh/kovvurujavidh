# PHASE 1 SPECIFICATION - Architecture & Design System Setup

**ATTENTION CODEX:** You are the Primary Implementation Engineer. Implement the following exactly as specified. Do not overcomplicate the setup.

## 1. Objective
Set up the initial Next.js project architecture, configure the design system (Tailwind CSS, fonts, and colors), and initialize the Git repository.

## 2. Files/Components Involved
*   `package.json`
*   `tailwind.config.ts`
*   `src/app/layout.tsx`
*   `src/app/globals.css`
*   `.gitignore`

## 3. Technical Approach
1. Initialize a new Next.js project using App Router, TypeScript, and Tailwind CSS in the current directory (`C:\AI\my-portfolio`). Ensure it doesn't create a nested folder by using `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm` (or equivalent non-interactive command).
2. Initialize Git, create an initial commit.
3. Overwrite `tailwind.config.ts` to define the custom color palette (Charcoal, Slate, off-white, and a subtle electric blue/amber accent), fonts, and an 8pt spacing system.
4. Overwrite `src/app/globals.css` to define CSS variables for Dark mode (default) and Light mode.
5. Update `src/app/layout.tsx` to include `Inter` and `JetBrains Mono` fonts via `next/font/google`, apply them to the body, and configure basic metadata for "Kovvuru Javidh - Data Analyst".

## 4. Dependencies
*   `next@latest`
*   `react`
*   `react-dom`
*   `typescript`
*   `tailwindcss`
*   `clsx`
*   `tailwind-merge`

## 5. UI Requirements
*   **Colors**: Dark mode first. Background should be `#0a0a0a`. Text should be `#ededed`. Accent can be `#3b82f6` (blue).
*   **Fonts**: Inter (Sans) and JetBrains Mono (Mono).
*   **Radii**: Standard border-radius `0.5rem` (8px).

## 6. Animation Requirements
*   None for Phase 1. Just establish the static foundation.

## 7. Responsive Requirements
*   Ensure standard Tailwind breakpoints are active.

## 8. Accessibility Requirements
*   Configure basic `lang="en"` in the HTML tag.
*   Ensure the color variables set in globals.css pass contrast ratio checks for background and text.

## 9. Performance Requirements
*   Use `next/font` for local font optimization (no layout shift).

## 10. Acceptance Criteria
*   The Next.js dev server starts successfully.
*   The home page displays a simple "Kovvuru Javidh - Data Analyst Portfolio Setup" heading with the correct Inter font and dark background.
*   Git is initialized with a clean `.gitignore` and an initial commit is created.

## 11. Testing Requirements
*   Run `npm run build` to ensure the project builds without errors.

---
**CODEX**: Please begin implementation of this specification.
