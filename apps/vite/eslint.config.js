import {
  GLOB_TS_DEFINITION,
  formatjsConfig,
  gitignore,
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
    ignores: ['__mocks__', GLOB_TS_DEFINITION],
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  typescriptConfig,
  reactConfig,
  formatjsConfig,
  unicornConfig,
  sonarjsConfig,
  prettierConfig,
];
