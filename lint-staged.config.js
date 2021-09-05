// ? https://github.com/okonet/lint-staged#configuration

module.exports = {
  '*.{ts,tsx}': ['npm run lint'],
  '*': ['npm run format'],
};
