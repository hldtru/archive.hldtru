const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');



module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm': '640px',
         // => @media (min-width: 640px) { ... }

        'md': '768px',
         // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
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
    mixBlendMode: ['responsive'],
    backgroundBlendMode: ['responsive'],
    isolation: ['responsive'],
    extend: {},
  },
  plugins: [
    require('tailwindcss-blend-mode')(),
    require('@tailwindcss/aspect-ratio'),
  ],
}
