# PHASE 10 SPECIFICATION - Premium One Piece Anime Theme

**ATTENTION CODEX:** We are pivoting back to the One Piece Anime theme, but keeping the high-end smooth scrolling and dynamic Framer Motion reveals we just installed.

## 1. Objective
Replace the dark tech aesthetic with a One Piece pirate theme (Parchment, Straw Hat Gold/Red, thick black manga borders) while keeping Lenis smooth scroll and upgrading the Framer Motion animations to be bouncy and dynamic.

## 2. Files/Components Involved
*   `src/app/globals.css` (MODIFY)
*   `src/app/layout.tsx` (MODIFY)
*   `src/components/ui/ProjectCard.tsx` (MODIFY)
*   `src/components/ui/AmbientBackground.tsx` (MODIFY - rename to `AnimeBackground.tsx` or change contents)
*   `tailwind.config.ts` (MODIFY)

## 3. Technical Approach
1.  **Tailwind & CSS**:
    *   Change the base background color to Parchment: `#fef3c7` (amber-50 or amber-100).
    *   Text color: `#1c1917` (stone-900).
    *   Accents: Straw Hat Red `#ef4444` and Gold `#eab308`.
    *   Add manga shadow utility in `globals.css`: `box-shadow: 6px 6px 0px #1c1917; border: 3px solid #1c1917;`.
2.  **Typography (`layout.tsx`)**:
    *   Remove `Space Grotesk`. Import `Bangers` (from Google Fonts) for headers and `Nunito` for body.
3.  **Project Cards (Wanted Posters)**:
    *   In `ProjectCard.tsx`, remove the glassmorphic borders and shadows.
    *   Apply the `manga-shadow` thick border.
    *   Background should be a slightly darker parchment (`#fde68a`).
    *   Add a "WANTED" or "PROJECT" text banner at the top of the card.
    *   **Hover Animation**: When hovered, `translate-x-[2px] translate-y-[2px]` and reduce the box shadow to `4px 4px 0px` to mimic a physical button press.
4.  **Animations (Framer Motion)**:
    *   Update the `ScrollReveal.tsx` or `FadeIn` variants to use `type: "spring", bounce: 0.5`. Cards should physically *pop* into place.
5.  **Background (`AmbientBackground.tsx`)**:
    *   Remove the glowing cyan/violet orbs.
    *   Replace with a subtle CSS pattern (like polka dots or a faint treasure map grid) using an SVG data URI or simple CSS radial gradients over the parchment color. Ensure it stays fixed (`z-[-1]`).

## 4. Dependencies
*   Keep `lenis` installed.

## 5. UI Requirements
*   **Aesthetic**: Vibrant, fun, One Piece Manga style.

## 6. Animation Requirements
*   **Scroll**: Keep Lenis active!
*   **Reveals**: Bouncy spring animations, not slow glassmorphic fades.

## 7. Acceptance Criteria
*   The site looks like a One Piece manga page.
*   The scrolling remains buttery smooth.

---
**INSTRUCTIONS**: Please read this spec and execute Phase 10 again. You are replacing the dark tech theme with the One Piece theme.
