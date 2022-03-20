// ? https://prettier.io/docs/en/configuration.html
module.exports = {
  ...require('../../prettier.config'),
  plugins: [
    // ? https://github.com/tailwindlabs/prettier-plugin-tailwindcss
    require('prettier-plugin-tailwindcss'),
  ],
};
