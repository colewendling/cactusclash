import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#E46C4E",
      },
      fontFamily: {
        favoritMono: ["ABCFavoritMono", "monospace"],
        optician: ["Optician Sans", "sans-serif"],
        robotoMono: ["Roboto Mono Variable", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
