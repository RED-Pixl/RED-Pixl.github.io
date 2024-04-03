/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'glassmorphism': 'inset 1px 1.5px 2px #fff9, inset 1px -0.5px 2px #ffffff4d'
      },
      colors: {
        'glassmorphism': 'rgb(0, 0, 0 / 5%)'
      }
    },
  },
  plugins: [],
}