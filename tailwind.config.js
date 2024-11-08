/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      ge: ["Arial Geo", "sans-serif"],
      en: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
