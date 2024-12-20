/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        sketch: ['KG Blank Space Sketch', 'cursive'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}