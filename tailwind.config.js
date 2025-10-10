/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      ge: ["Arial Geo", "sans-serif"],
      en: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
