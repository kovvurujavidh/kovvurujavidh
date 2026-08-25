export interface SkillGroup {
  id: string;
  label: string;
  skills: readonly string[];
}

export const skillGroups: readonly SkillGroup[] = [
  {
    id: "spreadsheets-bi",
    label: "Spreadsheets & BI",
    skills: [
      "Excel",
      "Pivot Tables",
      "Pivot Charts",
      "XLOOKUP",
      "VLOOKUP",
      "Conditional Formatting",
      "Power BI",
      "Power Query",
      "DAX",
      "KPI Cards",
      "Google Sheets",
    ],
  },
  {
    id: "data-query",
    label: "Data & Query",
    skills: [
      "SQL",
      "MySQL",
      "Joins",
      "Aggregate Functions",
      "Subqueries",
      "Data Cleaning",
      "EDA",
      "KPI Reporting",
      "Business Reporting",
    ],
  },
];
