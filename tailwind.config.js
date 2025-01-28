/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        emas:"#D4AF37",
        maroon:'#800000'
      }
    },
  },
  plugins: [],
}

