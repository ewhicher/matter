const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './resources/views/**/*',
    './config/classify.php',
  ],
  theme: {
    screens: {
      'xs': '480px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      brand: ['Poppins', 'sans-serif'],
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      lineHeight: {
        'busy': '0.84',
        'packed': '0.75'
      },
      spacing: ({ theme }) => ({ ...theme('screens') }),
      backgroundSize: {
        'full': '100%'
      }
    }
  },
}