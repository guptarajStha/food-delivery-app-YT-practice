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
        'fadeIn':'fadeIn 3s',
        'fadeIn-1':'fadeIn 1s',
      },
      gridTemplateColumns:{
        'auto-fill-240':'repeat(auto-fit,minmax(240px,1fr))',
      },
      boxShadow:{
        'custom': '0px 0px 10px #00000015'
      },
      textColor:{
        'tomato':'tomato'
      }
    },
  },
  plugins: [],
}