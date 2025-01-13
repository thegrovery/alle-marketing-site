/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    
    extend: {
      colors: {
        'black': '#070113',
        'black-1': '#0A0A0A',
        'white': '#ffffff',
        'white-1': '#C0C0C0',
        "gold": "#EFBD42",
        "green": "#4DD64B",
        "green-1": "#79F0B0",
      },
      fontFamily: {
        sans: [
          "Bricolage Grotesque Variable",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
