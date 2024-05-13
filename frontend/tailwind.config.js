/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        outfit: ['Outfit', 'sans-serif'],
      },
      animation:{
        'fadeIn':'fadeIn 3s'
      }
    },
  },
  plugins: [],
}