export type ProjectIconName = "table" | "database" | "chart";

export interface Project {
  id: string;
  title: string;
  tool: string;
  description: string;
  technologies: readonly string[];
  icon: ProjectIconName;
  href: string;
  linkLabel: string;
  image?: {
    src: string;
    alt: string;
  };
  featured?: boolean;
}

export const projects: readonly Project[] = [
  {
    id: "hr-analytics-excel",
    title: "HR Analytics Dashboard",
    tool: "Excel",
    description:
      "Built an interactive HR analytics dashboard analyzing 1,470 employee records, with KPI cards for headcount, attrition rate, average income, and average tenure.",
    technologies: [
      "Excel",
      "Pivot Tables",
      "Pivot Charts",
      "Slicers",
    ],
    icon: "table",
    href: "https://github.com/kovvurujavidh/HR-Analytics-Excel-Dashboard",
    linkLabel: "Open Excel repository",
    image: {
      src: "https://raw.githubusercontent.com/kovvurujavidh/HR-Analytics-Excel-Dashboard/main/Screenshot%202026-07-03%20162230.png",
      alt: "HR Analytics Excel dashboard screenshot",
    },
    featured: true,
  },
  {
    id: "hr-analytics-sql",
    title: "HR Analytics",
    tool: "SQL",
    description:
      "Wrote SQL queries over 1,470 employee records to analyze attrition, salaries, departments, and performance using grouped and aggregated reporting.",
    technologies: ["SQL", "MySQL"],
    icon: "database",
    href: "https://github.com/kovvurujavidh/HR-Analytics-SQL",
    linkLabel: "Open SQL repository",
    image: {
      src: "https://raw.githubusercontent.com/kovvurujavidh/HR-Analytics-SQL/main/Screenshot%202026-07-10%20162232.png",
      alt: "HR Analytics SQL project screenshot",
    },
  },
  {
    id: "hr-analytics-power-bi",
    title: "HR Analytics Dashboard",
    tool: "Power BI",
    description:
      "Developed an interactive dashboard with KPI cards, charts, slicers, and DAX measures to visualize workforce KPIs, attrition, salary, and employee distribution trends.",
    technologies: ["Power BI", "DAX", "Power Query"],
    icon: "chart",
    href: "https://github.com/kovvurujavidh",
    linkLabel: "Browse GitHub profile",
  },
];
