module.exports = {
  mode: 'jit',
  purge: ['./index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'custom': '400px'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    }
  },
  plugins: [],
}
