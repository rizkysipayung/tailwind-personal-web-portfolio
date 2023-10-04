/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#0891b2",
        secondary: "#1f2937",
        tertiary: "#4b5563",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
