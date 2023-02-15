// https://eslint.org/docs/latest/use/configure/

const path = require('node:path');

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  extends: '@template-react/eslint-config/base',
};
