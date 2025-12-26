import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "./public/**/*.{svg,html}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#b45309",
          light: "#f59e0b",
          dark: "#92400e",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Manrope'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 10px 50px rgba(37, 99, 235, 0.25)",
      },
      backgroundImage: {
        "grid-radial":
          "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.08), transparent 35%), radial-gradient(circle at 80% 0%, rgba(16,185,129,0.08), transparent 30%), radial-gradient(circle at 60% 70%, rgba(236,72,153,0.08), transparent 35%)",
      },
    },
  },
  plugins: [],
};

export default config;
