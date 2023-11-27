import {
  gitignore,
  nextConfig,
  prettierConfig,
  reactConfig,
  sonarjsConfig,
  typescriptConfig,
  unicornConfig,
} from '@template-react/eslint-config';
import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  gitignore({
    files: ['../../.gitignore'],
  }),
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  typescriptConfig,
  reactConfig,
  nextConfig,
  unicornConfig,
  sonarjsConfig,
  prettierConfig,
];
