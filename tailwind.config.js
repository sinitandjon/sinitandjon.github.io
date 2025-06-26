/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ Enable dark mode
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
