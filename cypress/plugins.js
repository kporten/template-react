const { startDevServer } = require('@cypress/vite-dev-server');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  if (config.testingType === 'component') {
    on('dev-server:start', (options) => startDevServer({ options }));
  }

  return config;
};
