// ? https://github.com/okonet/lint-staged#configuration

const fs = require('fs');

// ! https://github.com/microsoft/TypeScript/issues/27379
const tsc = (files) => {
  const tsconfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
  tsconfig.include = files;
  fs.writeFileSync('tsconfig.lint.json', JSON.stringify(tsconfig));

  return 'tsc --project tsconfig.lint.json';
};

module.exports = {
  '*.{ts,tsx}': [tsc, 'yarn lint'],
  '*': ['yarn format'],
};
