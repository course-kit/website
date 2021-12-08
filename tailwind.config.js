const colors = require('tailwindcss/colors')

module.exports = {
  // mode: "jit",
  // content: {
  //   files: [
  //     "./components/**/*.{vue,js}",
  //     "./layouts/**/*.vue",
  //     "./pages/**/*.vue",
  //     "./plugins/**/*.{js,ts}",
  //     "./nuxt.config.{js,ts}",
  //   ],
  // },
  // darkMode: false,
  theme: {
    fontFamily: {
      display: ['Readex Pro', 'sans-serif'],
      body: ['Readex Pro', 'sans-serif'],
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.500'),
            h1: {
              fontFamily: `${theme('fontFamily.display')}`
            },
            h2: {
              fontFamily: `${theme('fontFamily.display')}`
            },
            a: {
              color: theme('colors.green.500'),
              '&:hover': {
                color: theme('colors.green.600')
              },
            },
          },
        },
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'),],
}
