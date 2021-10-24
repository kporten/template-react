const codeCoverageTask = require('@cypress/code-coverage/task');
const { devServer, defineDevServerConfig } = require('@cypress/vite-dev-server');
const pluginIstanbul = require('vite-plugin-istanbul');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  if (config.testingType === 'component') {
    on('dev-server:start', (options) =>
      devServer(
        options,
        defineDevServerConfig({
          mode: 'test',
          clearScreen: false,
          server: {
            watch: {
              ignored: '**/coverage/**',
            },
          },
          plugins: [
            pluginIstanbul({
              exclude: ['src/Test.tsx'],
            }),
          ],
        }),
      ),
    );

    codeCoverageTask(on, config);
  }

  return config;
};
