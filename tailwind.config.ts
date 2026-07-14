import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#14213D",
          light: "#1E2E52",
          dark: "#0D1629",
        },
        gold: {
          DEFAULT: "#C9A227",
          light: "#E0C158",
          dark: "#9C7E1B",
        },
        parchment: {
          DEFAULT: "#F6F1E4",
          dark: "#EDE4CE",
        },
        wine: {
          DEFAULT: "#6E2438",
          light: "#8B3549",
        },
        slate: {
          DEFAULT: "#4B5563",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "rule-line":
          "linear-gradient(90deg, transparent, #C9A227 20%, #C9A227 80%, transparent)",
      },
    },
  },
  plugins: [],
};
export default config;
