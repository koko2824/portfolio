module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: '#d6e6f1',
        'light-blue': '#04c2c9',
        'dark-blue': '#04c2c9BF',
        'light-black': '#1f2937',
        'normal-black': '#1f2937',
      },
      fontFamily: {
        sans: ['Arial'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
