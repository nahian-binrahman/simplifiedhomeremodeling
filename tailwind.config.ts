import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        condensed: ["var(--font-oswald)", "sans-serif"],
        anton: ["var(--font-anton)", "sans-serif"],
        serifItalic: ["var(--font-libre-baskerville)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        brand: {
          black: "#0a0a0a",
          dark: "#141414",
          charcoal: "#1f1f1f",
          gray: {
            900: "#18181b",
            800: "#27272a",
            700: "#3f3f46",
            600: "#52525b",
            500: "#71717a",
            400: "#a1a1aa",
            300: "#d4d4d8",
            200: "#e4e4e7",
            100: "#f4f4f5",
            50: "#fafafa",
          },
          warmWhite: "#fdfdfd",
          offWhite: "#f8f8f8",
        },
      },
      borderRadius: {
        subtle: "8px",
        md: "6px",
        lg: "8px",
        xl: "10px",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.04)",
        card: "0 4px 12px 0 rgba(0, 0, 0, 0.05)",
        inset: "inset 0 1px 2px rgba(0, 0, 0, 0.04)",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
