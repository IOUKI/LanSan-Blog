import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {
    },
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/typography'),
  ],
};
export default config;
