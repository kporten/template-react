// https://eslint.org/docs/latest/use/configure/

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  extends: '@template-react/eslint-config/base',
  rules: {
    'turbo/no-undeclared-env-vars': [
      'error',
      {
        // runtime variables
        allowList: [
          'CLERK_SECRET_KEY',
          'DATABASE_URL',
          'LOG_LEVEL',
          'NODE_ENV',
          'PORT',
        ],
      },
    ],
  },
};
