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
        charcoal: { 950: "#1c1917", 900: "#292524", 800: "#44403c" },
        parchment: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a" },
        straw: "#eab308",
        strawred: "#ef4444",
        offwhite: "#fffbeb",
        ink: "#1c1917",
        electric: "#ef4444",
        violet: "#7f1d1d",
        amber: "#eab308",
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "Nunito", "sans-serif"],
        display: ["var(--font-bangers)", "Bangers", "Impact", "sans-serif"],
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
