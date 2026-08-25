# PHASE 4 SPECIFICATION - Project Bento Grid & Case Study Infrastructure

**ATTENTION CODEX:** Do not begin this phase until Phase 3 is fully complete.

## 1. Objective
Implement the "Selected Projects" section using a modern Bento Grid layout. This section will highlight the three HR Analytics projects from the resume.

## 2. Files/Components Involved
*   `src/app/page.tsx` (MODIFY - import Projects section)
*   `src/components/sections/Projects.tsx` (NEW)
*   `src/components/ui/ProjectCard.tsx` (NEW)
*   `src/data/projects.ts` (NEW - data file)

## 3. Technical Approach
1.  **Data Structure**: Create `src/data/projects.ts` and export a `projects` array containing the three projects from the resume:
    *   **Project 1**: HR Analytics Dashboard (Excel). Tech: Excel, Pivot Tables, Pivot Charts, Slicers. Description: Built an interactive HR analytics dashboard analyzing 1,470 employee records, with KPI cards for headcount, attrition rate, average income, and average tenure.
    *   **Project 2**: HR Analytics (SQL). Tech: SQL, MySQL. Description: Wrote SQL queries (SELECT, WHERE, GROUP BY, aggregate functions) over 1,470 employee records to analyze attrition, salaries, and performance.
    *   **Project 3**: HR Analytics Dashboard (Power BI). Tech: Power BI, DAX, Power Query. Description: Developed an interactive dashboard with KPI cards, charts, slicers, and DAX measures to visualize workforce KPIs and employee distribution trends.
2.  **Projects Section**: Create `Projects.tsx`. Use a CSS Grid (Bento Box style) to lay out the 3 projects. Make one project span 2 columns on desktop to break the symmetry and look more premium.
3.  **ProjectCard**: Create a reusable card component. It should have a subtle border (`border-border`), a dark background (`bg-card`), and a hover effect that slightly scales up an inner image container (even if the image is just a placeholder colored box for now) or brightens the border.
4.  **Integration**: Add the `<Projects />` section below the Hero in `page.tsx`.

## 4. Dependencies
*   `lucide-react` (For icons like database, table, or chart to represent the projects visually until we get real screenshots).
*   `framer-motion` (Optional: for a subtle reveal on scroll).

## 5. UI Requirements
*   **Aesthetic**: Minimalist Bento grid.
*   **Grid Layout**: Use `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` (or a custom bento span configuration).
*   **Card Design**:
    *   Top half: A visual area (use a subtle gradient background with a large centered Lucide icon representing the tool: e.g., `Table2` for Excel, `Database` for SQL, `BarChart3` for Power BI).
    *   Bottom half: Title, description, and tech stack tags (pill-shaped spans with small monospace text).
*   **Section Header**: A simple sticky or large header saying "01. Selected Projects".

## 6. Animation Requirements
*   **Hover**: When hovering over a `ProjectCard`, the visual area should scale slightly (`scale-105`), and an arrow icon might appear in the corner.
*   **Scroll Reveal**: (Optional) Use Framer Motion's `whileInView` to fade the cards in as the user scrolls down to them.

## 7. Responsive Requirements
*   Cards stack vertically on mobile.
*   Cards form a grid on tablet/desktop.

## 8. Accessibility Requirements
*   Use `<article>` tags for the cards.
*   Ensure tech stack contrast is accessible (e.g., text-muted-foreground on bg-secondary).
*   Provide `aria-label` for any links that might just say "View".

## 9. Performance Requirements
*   Since the data is static, map over it purely on the server if possible. If scroll animations are used, extract the animated parts into Client Components (`ProjectCard.tsx` can be `"use client"`).

## 10. Acceptance Criteria
*   The Projects section displays correctly with all 3 projects.
*   The Bento Grid layout is responsive.
*   Hover effects feel premium and smooth.

## 11. Testing Requirements
*   Test grid behavior at `320px`, `768px`, and `1024px` widths.

---
**CODEX INSTRUCTIONS**: Please read this spec and execute Phase 4.
