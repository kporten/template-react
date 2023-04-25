// https://eslint.org/docs/latest/use/configure/

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  extends: '@template-react/eslint-config/base',
  rules: {
    'turbo/no-undeclared-env-vars': [
      'error',
      {
        allowList: [
          'DATABASE_URL',
          'NODE_ENV',
          'PORT',
          'SESSION_SECRET',
          'SKIP_ENV_REQUIRED',
        ],
      },
    ],
  },
};
