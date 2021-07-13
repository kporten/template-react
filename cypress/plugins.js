const codeCoverageTask = require('@cypress/code-coverage/task');
const { startDevServer } = require('@cypress/vite-dev-server');
const pluginIstanbul = require('vite-plugin-istanbul');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  if (config.testingType === 'component') {
    on('dev-server:start', (options) =>
      startDevServer({
        options,
        viteConfig: {
          clearScreen: false,
          plugins: [
            pluginIstanbul({
              include: 'src/**',
            }),
          ],
        },
      }),
    );

    codeCoverageTask(on, config);
  }

  return config;
};
