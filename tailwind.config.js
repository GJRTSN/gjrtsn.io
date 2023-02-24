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
          "url('https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80')",
      },
    },
  },
  plugins: [],
};
