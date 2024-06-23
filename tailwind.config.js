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
        primary: ["King Kofi", "sans-serif"],
        secondary: ['"Adineue PRO"', "sans-serif"],
      },
      boxShadow: {
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
