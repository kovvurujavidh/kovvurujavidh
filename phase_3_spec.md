# PHASE 3 SPECIFICATION - Hero Section & Intro Animations

**ATTENTION CODEX:** Do not begin this phase until Phase 2 is fully complete.

## 1. Objective
Build the highly-visual "Hero" section of the landing page. It should immediately communicate the user's name (Kovvuru Javidh) and role (Data Analyst) using premium typography and subtle entrance animations.

## 2. Files/Components Involved
*   `src/app/page.tsx` (MODIFY)
*   `src/components/sections/Hero.tsx` (NEW)
*   `src/components/animations/FadeIn.tsx` (NEW - generic Framer Motion wrapper, optional but recommended)

## 3. Technical Approach
1.  **Component Creation**: Create `Hero.tsx` inside `src/components/sections`.
2.  **Content**:
    *   **Eyebrow**: "Hi, I am Kovvuru Javidh" (Small monospace typography)
    *   **Headline**: "Turning raw data into decision-ready insights." (Large, bold sans-serif, e.g., text-5xl or text-7xl depending on breakpoint).
    *   **Subheadline**: "Data Analyst skilled in SQL, Power BI, and Excel. Currently building operational efficiency at India Post." (Muted, readable sans-serif).
    *   **Call to Action**: Two buttons. Primary: "View Projects" (links to `#projects`), Secondary: "Resume" (links to `/resume.pdf` for now).
3.  **Animation**: Use `framer-motion` to create a staggered entrance. The eyebrow fades in first, followed by the headline, subheadline, and buttons.
4.  **Integration**: Import `<Hero />` into `src/app/page.tsx`.

## 4. Dependencies
*   `framer-motion` (Install if not present: `npm install framer-motion`)
*   `lucide-react` (For any button icons, like an arrow)

## 5. UI Requirements
*   **Aesthetic**: Brutalist/Minimalist. Avoid generic illustrations. Rely purely on spacing, typography size contrast, and alignment.
*   **Spacing**: Ensure massive padding/margin above and below the hero text (e.g., `py-32` or `min-h-[80vh] flex flex-col justify-center`).
*   **Typography**: The headline should use `tracking-tight` (negative letter spacing) for a premium modern look.
*   **Buttons**: The primary button should have a hover effect (e.g., background color shift or scale-up).

## 6. Animation Requirements
*   **Staggered Entrance**: Use Framer Motion's `initial`, `animate`, and `transition` props.
*   **Direction**: Fade up (`y: 20` to `y: 0`, `opacity: 0` to `opacity: 1`).
*   **Accessibility**: Respect `prefers-reduced-motion` using `useReducedMotion()` from Framer Motion if you implement complex motion. Otherwise, basic Framer Motion handles it gracefully.

## 7. Responsive Requirements
*   **Mobile**: Stack the buttons vertically on small screens if they don't fit. Reduce headline size.
*   **Desktop**: Massive typography, horizontal buttons.

## 8. Accessibility Requirements
*   Use semantic `<h1>` for the main headline and `<p>` for the subheadline.
*   Ensure the contrast of the muted text against the background is at least 4.5:1.

## 9. Performance Requirements
*   Because we are using Framer Motion, `Hero.tsx` will need to be a Client Component (`"use client"`). Keep the `page.tsx` as a Server Component.

## 10. Acceptance Criteria
*   The page loads and the text elegantly fades/slides up into place.
*   The layout is vertically centered on the screen.
*   The text is perfectly legible on both mobile and desktop.

## 11. Testing Requirements
*   Refresh the page to ensure the animation triggers properly.
*   Test on a small viewport to ensure text doesn't overflow horizontally.

---
**CODEX INSTRUCTIONS**: Please read this spec and execute Phase 3.
