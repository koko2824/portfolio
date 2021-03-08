module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        px: '2px',
      },
      width: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '10/10': '100%',
      },
      colors: {
        white: '#d6e6f1',
        'dark-white': '#E0DCDC',
        'light-blue': '#04c2c9',
        'dark-blue': '#04c2c9BF',
        'light-black': '#6B7280BF',
        'normal-black': '#1f2937',
      },
      fontFamily: {
        sans: ['Arial'],
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        '4xl': '0 45px 70px -18px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
