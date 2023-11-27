import {
  gitignore,
  prettierConfig,
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
        ...globals.node,
      },
    },
  },
  typescriptConfig,
  unicornConfig,
  sonarjsConfig,
  prettierConfig,
];
