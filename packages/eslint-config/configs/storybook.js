import storybookPlugin from 'eslint-plugin-storybook';

import { GLOB_TS, GLOB_TSX } from '../utils/glob.js';

/** @type {import('eslint').Linter.FlatConfig} */
export default {
  files: [GLOB_TS, GLOB_TSX],
  plugins: {
    storybook: storybookPlugin,
  },
  rules: {
    ...storybookPlugin.configs.recommended.rules,
  },
};
