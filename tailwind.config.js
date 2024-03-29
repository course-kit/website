const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  // mode: "jit",
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
  ],
  safelist: ['border-blue-400', 'border-red-400'],
  theme: {
    fontFamily: {
      display: ['Readex Pro', 'sans-serif'],
      body: ['Readex Pro', 'sans-serif'],
    },
    extend: {
      lineHeight: {
        '12': '3rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
            color: theme('colors.gray.500'),
            h1: {
              fontFamily: `${theme('fontFamily.display')}`,
            },
            h2: {
              fontFamily: `${theme('fontFamily.display')}`
            },
            h3: {
              fontFamily: `${theme('fontFamily.display')}`
            },
            h4: {
              fontFamily: `${theme('fontFamily.display')}`
            },
            blockquote: {
              quotes: 'none'
            }
          },
        },
      })
    }
  },
  variants: ['important'],
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
  ]
}
