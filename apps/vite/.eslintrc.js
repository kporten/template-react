// https://eslint.org/docs/latest/use/configure/

const path = require('node:path');

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  extends: '@template-react/eslint-config/vite',
  rules: {
    'import/no-restricted-paths': [
      'error',
      {
        basePath: './**/src',
        zones: [
          {
            target: './components/**/*',
            from: './{features,layouts,routes}/**/*',
          },
          {
            target: './features/**/*',
            from: './{layouts,routes}/**/*',
          },
          {
            target: './layouts/**/*',
            from: './{features,routes}/**/*',
          },
        ],
      },
    ],
  },
};
