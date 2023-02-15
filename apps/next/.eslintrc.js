// https://eslint.org/docs/latest/use/configure/

const path = require('node:path');

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  extends: '@template-react/eslint-config/next',
  settings: {
    tailwindcss: {
      config: path.resolve('./tailwind.config.js'),
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
};
