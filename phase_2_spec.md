# PHASE 2 SPECIFICATION - Global Layout, Navigation & Footer

**ATTENTION CODEX:** Do not begin this phase until Phase 1 is fully complete and committed to Git.

## 1. Objective
Implement the global shell of the application. This includes a responsive, minimalist navigation bar, a structured footer, and the main layout container that wraps all pages.

## 2. Files/Components Involved
*   `src/components/layout/Navbar.tsx` (NEW)
*   `src/components/layout/Footer.tsx` (NEW)
*   `src/app/layout.tsx` (MODIFY)
*   `src/lib/utils.ts` (NEW - for tailwind class merging if not already created)

## 3. Technical Approach
1.  **Navigation**: Create a sticky `<nav>` at the top.
    *   **Desktop**: Logo/Name on the left, links (About, Projects, Experience) on the right.
    *   **Mobile**: A simple hamburger menu (using Lucide icons) that opens a full-screen or dropdown menu.
2.  **Footer**: A clean footer at the bottom with links to LinkedIn, GitHub, and a mailto link.
3.  **Layout Integration**: Import `Navbar` and `Footer` into `src/app/layout.tsx` so they persist across all pages. The main content should be wrapped in a `<main>` tag with a minimum height (`min-h-screen`).

## 4. Dependencies
*   `lucide-react` (Install if not present: `npm install lucide-react`)
*   `clsx`, `tailwind-merge` (Install if not present)

## 5. UI Requirements
*   **Aesthetic**: Brutalist authenticity mixed with premium minimalism.
*   **Navbar**: Use a slight translucent background (`bg-background/80`) with `backdrop-blur-md` for a glass effect when scrolling.
*   **Typography**: Use the `JetBrains Mono` font for small UI labels (like "01. About", "02. Work"). Use `Inter` for standard links.
*   **Footer**: Include a subtle copyright ("© 2026 Kovvuru Javidh").

## 6. Animation Requirements
*   **Hover states**: Links should have a subtle underline animation on hover.
*   **Mobile Menu**: If implementing a mobile menu, use a simple Framer Motion `<AnimatePresence>` fade-in (if Framer Motion is installed), otherwise standard CSS transitions for now.

## 7. Responsive Requirements
*   Hide desktop links on `< md` screens.
*   Ensure padding is appropriate on mobile (`px-4`) vs desktop (`px-8` or `px-12`).

## 8. Accessibility Requirements
*   Use proper semantic tags: `<header>`, `<nav>`, `<footer>`.
*   Ensure the mobile menu toggle button has an `aria-label="Toggle menu"`.
*   All links must have visible focus states (`focus-visible:ring-2`).

## 9. Performance Requirements
*   Navbar and Footer should ideally be Server Components, but if the mobile menu requires state (`useState`), extract just the mobile menu toggle into a Client Component (`"use client"`).

## 10. Acceptance Criteria
*   The Navbar sticks to the top of the screen when scrolling.
*   The layout successfully wraps `children` between the Navbar and Footer.
*   The site works perfectly on a mobile viewport.

## 11. Testing Requirements
*   Verify that clicking navigation links routes correctly (even if they just point to `#` or `/` for now).

---
**CODEX INSTRUCTIONS**: Once Phase 1 is done, read this spec and execute Phase 2.
