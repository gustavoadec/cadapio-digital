/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
/* extendendo uma nova propiedade do tipo background*/
      backgroundImage:{
        "home":"url('/assets/bg.png')"
      }
    },
  },
  plugins: [],
}

