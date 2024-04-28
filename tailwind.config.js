/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgblack:"#010101",
        customYellow:"#f9ed10"
      }
    },
  },
  plugins: [],
}

