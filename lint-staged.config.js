// ? https://github.com/okonet/lint-staged#configuration

module.exports = {
  '*.{ts,tsx}': ['npm run lint:ci'],
  '*': ['npm run format:ci'],
};
