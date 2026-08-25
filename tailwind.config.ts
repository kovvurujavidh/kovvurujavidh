import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: { 950: "#0a0a0a", 900: "#111111", 800: "#1a1a1a" },
        slate: { 500: "#64748b", 400: "#94a3b8", 300: "#cbd5e1" },
        offwhite: "#ededed",
        electric: "#3b82f6",
        amber: "#f59e0b",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },
      borderRadius: { DEFAULT: "0.5rem" },
      spacing: {
        1: "0.5rem", 2: "1rem", 3: "1.5rem", 4: "2rem", 5: "2.5rem",
        6: "3rem", 8: "4rem", 10: "5rem", 12: "6rem", 16: "8rem",
      },
    },
  },
  plugins: [],
};

export default config;
