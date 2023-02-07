// https://tailwindcss.com/docs/configuration

const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss/types').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    // add paths of imported packages if tailwind is used
    // ../packages/ui/**/*.tsx
  ],
  theme: {
    extend: {
      fontFamily: {
        template: ['var(--font-leckerli-one)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
