const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  // mode: "jit",
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
  ],
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
            code: {
              color: '#DD4A68',
              backgroundColor: '#f5f2f0',
              padding: '0.20em 0.35em'
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
