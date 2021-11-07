// ? https://tailwindcss.com/docs/configuration

const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['index.html', 'src/**/*.tsx'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
      },
    },
  },
};
