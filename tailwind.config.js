/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderStyle: ['important'],
      borderColor: ['important'],
      borderWidth: ['important'],
      borderRadius: ['important'],
      textColor: ['important'],
      height: ['important'],
      width: ['important'],
      backgroundColor: ['important'],
      padding: ['important'],
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('important', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.\\!${rule.selector.slice(1)}`
          rule.walkDecls((decl) => {
            decl.important = true
          })
        })
      })
    }),
  ],
})
