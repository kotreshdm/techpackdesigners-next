import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
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
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
      fontSize: {
        "custom-xs": "0.75rem",
        "custom-sm": "0.875rem",
        "custom-base": "1rem",
        "custom-lg": "1.125rem",
        "custom-xl": "1.25rem",
        "custom-2xl": "1.5rem",
        "custom-3xl": "1.875rem",
        "custom-4xl": "2.25rem",
        "custom-5xl": "3rem",
        "custom-6xl": "4rem",
        "custom-7xl": "5rem",
        "custom-8xl": "6rem",
        "custom-9xl": "7rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
