// https://eslint.org/docs/latest/use/configure/

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  extends: '@template-react/eslint-config/base',
  rules: {
    'turbo/no-undeclared-env-vars': [
      'error',
      { allowList: ['DATABASE_URL', 'PORT'] },
    ],
  },
};
