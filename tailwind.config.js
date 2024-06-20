/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fc6255",
        secondary: "#58c4dd",
        highlight: "#83c167",
        "text-color": "#333",
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ['"Adineue PRO"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
