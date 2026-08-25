# PHASE 7 SPECIFICATION - Page Assembly & Polish

**ATTENTION:** Do not begin this phase until Phase 5 and Phase 6 are fully complete.

## 1. Objective
Assemble all the isolated sections (`Experience`, `Skills`, `Now`, `GithubActivity`) into the main `page.tsx` and apply final visual polish, spacing adjustments, and subtle scroll-based motion.

## 2. Files/Components Involved
*   `src/app/page.tsx` (MODIFY)
*   `src/components/animations/ScrollReveal.tsx` (NEW - Optional)

## 3. Technical Approach
1.  **Assembly**: Open `src/app/page.tsx`. Import the following components:
    *   `<Hero />` (Already there)
    *   `<Projects />` (Already there)
    *   `<Experience />`
    *   `<Skills />`
    *   `<Now />`
    *   `<GithubActivity />` (If completed in Phase 6)
2.  **Layout Order**:
    *   `Hero` -> `Now` (can be placed directly below Hero or inside an About section) -> `Projects` -> `Experience` -> `Skills` -> `GithubActivity`.
3.  **Scroll Animations**:
    *   If using GSAP or Framer Motion, you can wrap these sections in a `<ScrollReveal>` component that fades them in as they enter the viewport.
    *   Keep it subtle (e.g., `y: 20`, `opacity: 0` to `y: 0`, `opacity: 1` over `0.6s`).

## 4. Dependencies
*   Ensure everything builds correctly without conflicting imports.

## 5. UI Requirements
*   **Spacing**: Ensure there is consistent vertical rhythm between sections. Use `gap-24` or `py-24` uniformly so the page flows cleanly.
*   **Dividers**: Consider adding a subtle border (`border-t border-border/70`) between major sections to segment the content logically.

## 6. Animation Requirements
*   No flashy effects. Just a smooth reveal as the user scrolls down the page.

## 7. Responsive Requirements
*   Check the horizontal padding (`px-6 sm:px-8 lg:px-12`) is identical across all imported sections.

## 8. Accessibility Requirements
*   Verify the final DOM structure makes sense. Heading hierarchy should jump logically (H1 for Hero, H2s for section titles, H3s for items).

## 9. Performance Requirements
*   Ensure that wrapping Server Components with a Client Component (like `<ScrollReveal>`) doesn't convert the children into Client Components. (Hint: pass Server Components as `children` to the Client Component wrapper).

## 10. Acceptance Criteria
*   The entire portfolio is fully scrollable from Hero to Footer, with all sections rendering perfectly.

## 11. Testing Requirements
*   Run `npm run build` to ensure no Type errors exist across the assembled page.

---
**INSTRUCTIONS**: Please read this spec and execute Phase 7.
