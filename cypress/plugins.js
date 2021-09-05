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
          mode: 'test',
          clearScreen: false,
          server: {
            watch: {
              ignored: '**/coverage/**',
            },
          },
          esbuild: {
            // * set browser language to `en`, otherwise the tests may have different results
            jsxInject: `Object.defineProperty(window.navigator, 'languages', {value: ['en'], writable: true});`,
          },
          plugins: [
            pluginIstanbul({
              include: 'src/**',
              exclude: ['src/providers/Test.tsx'],
            }),
          ],
        },
      }),
    );

    codeCoverageTask(on, config);
  }

  return config;
};
