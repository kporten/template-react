// ? https://github.com/okonet/lint-staged#how-to-use-lint-staged-in-a-multi-package-monorepo
module.exports = {
  ...require('../../lint-staged.config.js'),
  '*.{ts,tsx}': ['eslint --fix'],
  '*.test.{ts,tsx}': ['vitest related'],
};
