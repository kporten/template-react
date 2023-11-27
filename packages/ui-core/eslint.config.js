import {
  GLOB_TEST,
  gitignore,
  prettierConfig,
  reactConfig,
  sonarjsConfig,
  storybookConfig,
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
      },
    },
  },
  typescriptConfig,
  reactConfig,
  storybookConfig,
  unicornConfig,
  sonarjsConfig,
  prettierConfig,
  {
    files: ['src/presets/*.ts', GLOB_TEST],
    rules: {
      'sonarjs/no-duplicate-string': 'off',
    },
  },
];
