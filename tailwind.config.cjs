const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "components/**/*.{astro,vue}",
    "pages/**/*.astro",
    "layouts/**/*.astro",
  ],
  theme: {
    fontSize: {
      12: ".75rem",
      14: ".875rem",
      16: "1rem",
      18: "1.125rem",
      24: "1.5rem",
      32: "2rem",
      42: "2.625rem",
      54: "3.375rem",
      68: "4.25rem",
    },
    maxWidth: {
      6: "46.5rem",
      8: "61.5rem",
      12: "91.5rem",
    },
    screens: {
      sm: "30rem",
      md: "46.5rem",
      lg: "60rem",
      xl: "75rem",
      "2xl": "90rem",
    },
    extend: {
      borderRadius: {
        "4xl": "2.25rem",
      },
      spacing: {
        15: "3.75rem",
      },
      colors: {
        "black-75": "#000000bf",
        "zinc-900-75": "#202024bf",
      },
      fontFamily: {
        sans: ["Mona Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "Hubot Sans",
          "Mona Sans",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      lineHeight: { 4.5: "1.125rem", 12: "3rem" },
    },
  },
  plugins: [],
};
