module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: '#00E6EF',
        green: '#00EFC1',
        white: '#D6E6F1',
        bg: '#094152',
      },
      fontFamily: {
        sans: ['Arial']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
