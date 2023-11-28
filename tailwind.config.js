/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStopPositions: {
        94:'94%'
      },
      backgroundImage:{
          'background':[' linear-gradient(156deg, rgba(0,0,0,1) 45%, rgba(74,74,77,1) 91%);']
      },
      fontFamily:{
        'dancing':[ 'Dancing Script', 'cursive']
      }
    },
  },
  plugins: [],
}

