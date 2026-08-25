# PHASE 5 SPECIFICATION - Experience, Skills, and "Now" Sections

**ATTENTION OPENCODE/CODEX:** This phase may be executed in parallel with Phase 4. **CRITICAL RULE**: Do NOT modify `src/app/page.tsx` or `package.json` during this phase to avoid merge conflicts with other agents. Only create new isolated components and data files.

## 1. Objective
Build the "Experience", "Skills", and "Now" (Current Status) sections.

## 2. Files/Components Involved
*   `src/components/sections/Experience.tsx` (NEW)
*   `src/components/sections/Skills.tsx` (NEW)
*   `src/components/sections/Now.tsx` (NEW)
*   `src/data/experience.ts` (NEW)
*   `src/data/skills.ts` (NEW)

## 3. Technical Approach
1.  **Experience Section**:
    *   Create a clean, vertical timeline layout in `Experience.tsx`.
    *   Data source (`src/data/experience.ts`):
        1. Assistant Branch Postmaster (ABPM) - India Post (May 2026 - Present)
        2. Data Analyst Trainee - Zaalima Development Pvt. Ltd. (Apr 2025 - Jun 2025)
    *   For each role, list the key bullet points from the resume.
2.  **Skills Section**:
    *   Create a grouped skill layout in `Skills.tsx`.
    *   Group 1: Spreadsheets & BI (Excel, Power BI, Google Sheets)
    *   Group 2: Data & Query (SQL, MySQL, Data Cleaning, EDA, KPI Reporting)
    *   Design: Use elegant pill tags (`rounded-full border border-border px-4 py-2 text-sm text-muted-foreground`).
3.  **Now Section**:
    *   A small, compact section (often styled as a card or a pulsing dot indicator) showing current status.
    *   Text: "Currently working as an Assistant Branch Postmaster at India Post while seeking full-time Data Analyst roles."
4.  **DO NOT INTEGRATE**: Do not import these into `page.tsx`. Another phase will handle final page assembly.

## 4. Dependencies
*   Use standard Tailwind CSS. No new npm packages allowed.

## 5. UI Requirements
*   **Aesthetic**: Maintain the premium, brutalist-minimalist feel. High contrast, distinct borders.
*   **Typography**: Use `JetBrains Mono` for dates and tags. Use `Inter` for standard descriptions.

## 6. Animation Requirements
*   Keep it simple. You can use standard CSS `hover:bg-secondary/50` for interactive states.

## 7. Responsive Requirements
*   Ensure the timeline collapses cleanly on mobile (e.g., removing the left-margin structural line if it gets too cramped).

## 8. Accessibility Requirements
*   Use `<section>` tags with `aria-labelledby`.

## 9. Performance Requirements
*   These can all be Server Components.

## 10. Acceptance Criteria
*   The three components are created and correctly render their respective data.
*   No git conflicts are generated (by strictly avoiding `page.tsx`).

---
**INSTRUCTIONS**: Please read this spec and execute Phase 5. Do NOT modify `page.tsx`.
