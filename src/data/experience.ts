export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  current?: boolean;
  highlights: readonly string[];
}

export const experience: readonly ExperienceItem[] = [
  {
    id: "abpm-india-post",
    role: "Assistant Branch Postmaster (ABPM)",
    company: "Department of Posts, India",
    location: "India Post",
    period: "May 2026 — Present",
    current: true,
    highlights: [
      "Manage daily postal, banking, and customer service operations, including deposits, withdrawals, and postal savings transactions.",
      "Maintain accurate operational records and reports; support cash management, account verification, and transaction processing.",
      "Coordinate with branch and departmental staff to ensure smooth day-to-day operations and compliance with service standards.",
    ],
  },
  {
    id: "data-analyst-trainee-zaalima",
    role: "Data Analyst Trainee",
    company: "Zaalima Development Pvt. Ltd.",
    location: "Remote",
    period: "Apr 2025 — Jun 2025",
    highlights: [
      "Collected, cleaned, and validated datasets in Excel to support business decision-making and reporting.",
      "Supported classification and prediction analysis tasks as part of a collaborative data science project, under mentorship.",
      "Created data visualizations and reports using Pivot Tables and KPI summaries, and presented insights to the team under mentorship.",
    ],
  },
];
