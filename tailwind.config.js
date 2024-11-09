const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./renderer/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      mono: ['"Space Mono"', ...defaultTheme.fontFamily.mono],
      serif: ['"Source Serif 4"', ...defaultTheme.fontFamily.serif],
    },
  },
  plugins: [],
};
