const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './resources/views/**/*',
    './config/classify.php',
  ],
  theme: {
    colors: {
      'dark-grey': '#141418',
      'blue': '#4d52f8',
      'red': '#fd525d',
      'yellow': '#ffff64',
      'green': '#3afd90',
      'light-grey': '#e6e7e8',
      'light-blue': '#ebecfd',
      'light-red': '#ffeced',
      'light-yellow': '#fffff0',
      'light-green': '#eafff4',
      'white': '#ffffff',
      'mid-blue': '#a6a8fb',
      'mid-green': '#89febc',
      'mid-red': '#febabe',
      'mid-yellow': '#ffffa2',
      'mid-grey': '#acacb5',
      'light-blue-strong': '#e4e1f9',
    },
    screens: {
      'xs': '480px',
      ...defaultTheme.screens,
      '2xl': '1392px',
      '3xl': '1536px',
    },
    fontFamily: {
      brand: ['DM Sans', 'sans-serif'],
      sans: ['DM Sans', 'sans-serif'],
    },
    extend: {
      lineHeight: {
        'busy': '0.84',
        'packed': '0.75'
      },
      spacing: ({ theme }) => ({
        ...theme('screens'),
        'auto': 'auto',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        'full': '100%',
      }),
      backgroundSize: {
        'full': '100%'
      }
    }
  },
}