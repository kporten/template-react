// ? https://github.com/istanbuljs/nyc#common-configuration-options

module.exports = {
  all: false, // ? Enable if you want to report all files (not just the ones touched by your tests)
  include: ['src/**/*'],
  reporter: ['cobertura', 'html'],
};
