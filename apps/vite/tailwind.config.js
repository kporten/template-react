// ? https://tailwindcss.com/docs/configuration
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
