const colors = require('tailwindcss/colors')



module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Scania Sans CY', 'Scania Sans CY Headline', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding: '0rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
