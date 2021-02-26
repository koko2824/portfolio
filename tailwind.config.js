module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: '#1A2F52',
        'light-green': '#00E6EF',
        green: '#00EFC1',
        white: '#D6E6F1',
        bg: '#1A2F52',
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
