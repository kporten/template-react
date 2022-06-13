// ? https://tailwindcss.com/docs/configuration

/** @type {import('tailwindcss/types').Config} */
module.exports = {
  content: [
    'index.html',
    'src/**/*.tsx',
    // ? add paths of imported packages if tailwind is used
    // '../packages/ui/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        template: ['Leckerli One'],
      },
    },
  },
};
