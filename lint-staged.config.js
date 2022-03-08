// ? https://github.com/okonet/lint-staged#how-to-use-lint-staged-in-a-multi-package-monorepo
module.exports = {
  '*': ['prettier --write --ignore-unknown'],
};
