/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      ge: ["Noto Sans Georgian", "sans-serif"],
      en: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
