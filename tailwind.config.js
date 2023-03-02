/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sen: ["Sen", "sans-serif"],
        michroma: ["Michroma", "sans-serif"],
        blinker: ["Blinker", "sans-serif"],
        sunflower: ["Sunflower", "sans-serif"],
        konit: ["Kanit", "sans-serif"],
        iceland: ["Iceland", "cursive"],
      },
      backgroundImage: {
        welcome:
          "url('https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80')",
      },
      visibility: ["hover"],
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      mobile: { max: "1023px" },
      custom1: { max: "1210px" },
      md: { min: "1023px" },
      sm: { max: "639px" },
    },
  },
  plugins: [],
};
