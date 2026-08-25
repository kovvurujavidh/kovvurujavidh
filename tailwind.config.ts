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
        charcoal: { 950: "#090b0a", 900: "#111511", 800: "#1a211a" },
        offwhite: "#f2f5ef",
        ink: "#090b0a",
        electric: "#b7ff00",
        violet: "#8977ff",
        amber: "#ff8a3d",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
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
