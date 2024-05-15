/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily:{
      'sans': ['Roboto','sans-serif']

    },
    extend: {
/* extendendo uma nova propiedade do tipo background*/
      backgroundImage:{
        "home":"url('/assets/bg.png')"
      }
    },
  },
  plugins: [],
}

