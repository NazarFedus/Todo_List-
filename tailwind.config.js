/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color_blue: '#16A3B7',
        color_red: '#DC3445'
      }
    },
  },
  plugins: [],
}