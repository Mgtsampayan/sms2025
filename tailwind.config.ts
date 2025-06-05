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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Theme variables (referencing CSS variables from globals.css)
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "bg-card": "var(--bg-card)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "border-color": "var(--border-color)",

        // Brand colors (referencing CSS variables from globals.css for theme-awareness)
        lamaSky: "var(--color-lamaSky)",
        lamaSkyLight: "var(--color-lamaSkyLight)", // Will use light hex unless overridden for dark in globals.css
        lamaPurple: "var(--color-lamaPurple)",
        lamaPurpleLight: "var(--color-lamaPurpleLight)", // Will use light hex unless overridden for dark in globals.css
        lamaYellow: "var(--color-lamaYellow)",
        lamaYellowLight: "var(--color-lamaYellowLight)", // Will use light hex unless overridden for dark in globals.css
      },
      boxShadow: {
        soft: '0 2px 8px -1px var(--shadow-color), 0 1px 3px -1px var(--shadow-color)',
        medium: '0 6px 12px -2px var(--shadow-color), 0 3px 7px -3px var(--shadow-color)',
      },
    },
  },
  plugins: [],
};
export default config;