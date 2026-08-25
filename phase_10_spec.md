# PHASE 10 SPECIFICATION - Premium Tech Aesthetic Overhaul

**ATTENTION CODEX:** The user requested a visual pivot away from the previous themes. We are now building a high-end, sleek, highly-animated developer portfolio (similar to gustavobatista.dev). 

## 1. Objective
Implement smooth scrolling (Lenis), glowing ambient backgrounds, smooth scroll-triggered reveal animations, and interactive glowing hover states.

## 2. Files/Components Involved
*   `package.json` (MODIFY - install dependencies)
*   `src/app/globals.css` (MODIFY)
*   `src/app/layout.tsx` (MODIFY)
*   `src/components/ui/AmbientBackground.tsx` (NEW)
*   `src/components/layout/SmoothScroll.tsx` (NEW)
*   `src/components/ui/ProjectCard.tsx` (MODIFY)

## 3. Technical Approach
1.  **Dependencies**:
    *   Run `npm install @studio-freight/lenis` (or just `lenis` if using the newer package).
2.  **Smooth Scrolling (`SmoothScroll.tsx`)**:
    *   Create a Client Component that initializes Lenis inside a `useEffect`. Use `requestAnimationFrame` for the `raf` loop. Wrap the `children` in `layout.tsx` with this component so the whole page scrolls smoothly.
3.  **Dynamic Ambient Background (`AmbientBackground.tsx`)**:
    *   Create a fixed (`fixed inset-0 z-[-1] overflow-hidden bg-zinc-950`) component.
    *   Add 2 or 3 large div circles. Give them absolute positions (e.g., top-left, bottom-right).
    *   Color them with gradients (e.g., Cyan `#06b6d4` and Deep Violet `#8b5cf6`).
    *   Apply extreme blur: `blur-[120px]` or `blur-[160px]`.
    *   Opacity should be low (10-20%) so it doesn't distract from the text.
    *   *Mobile Performance*: Add `hidden md:block` to the blurred circles so they don't lag mobile devices, just leave the dark background for mobile.
4.  **UI & Hover Effects (`ProjectCard.tsx`)**:
    *   Update the card background to `bg-zinc-900/50` with a subtle `border-white/10`.
    *   Add a glowing hover effect: `hover:border-cyan-500/50 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)] transition-all duration-500`.
    *   When hovered, the card should translate slightly up (`-translate-y-1`).
5.  **Colors (`globals.css`)**:
    *   Update the base background to `#09090b` (zinc-950).
    *   Text should be `#fafafa` (zinc-50).

## 4. Dependencies
*   `@studio-freight/lenis` or `lenis`.

## 5. UI Requirements
*   **Aesthetic**: Very sleek, dark, glassmorphic, glowing.
*   **Typography**: Ensure high contrast.

## 6. Animation Requirements
*   **Scroll**: Inertia-based smooth scroll.

## 7. Responsive Requirements
*   Disable the heavy CSS blurs on mobile.

## 8. Accessibility Requirements
*   Respect `prefers-reduced-motion` in the CSS (disable smooth scroll and animations if true).

## 9. Acceptance Criteria
*   The site feels heavy and expensive when scrolling.
*   The background has subtle glowing orbs.

---
**INSTRUCTIONS**: Please read this spec and execute Phase 10 (Premium Tech Aesthetic).
