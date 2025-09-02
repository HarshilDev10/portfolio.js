/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
      'spin-slow': 'spin 6s linear infinite',
    },
      fontFamily: {
        asimov: ["Asimovian", "sans-serif"],
        poppins: ['Poppins', 'sans-serif'],
        rockville: ['Rockville', 'sans-serif'],
        futuralumine:['FuturaLumine', 'sans-serif'],
        montserrat:['MontserratAlt1','sans-serif'],
        neusharp:['NeusharpThinCondensed', 'sans-serif']
      },
    },
  },
  plugins: [],
}

