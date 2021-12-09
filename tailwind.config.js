const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  // mode: "jit",
  content: {
    files: [
      "./components/**/*.{vue,js}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
  },
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
            }
          },
        },
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.max-w-video': {
          'max-width': '760px',
        }
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    })
  ],
}
