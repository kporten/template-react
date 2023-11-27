import nextPlugin from '@next/eslint-plugin-next';

import { GLOB_TS, GLOB_TSX } from '../utils/glob.js';

/** @type {import('eslint').Linter.FlatConfig} */
export default {
  files: [GLOB_TS, GLOB_TSX],
  plugins: {
    '@next/next': nextPlugin,
  },
  rules: {
    ...nextPlugin.configs.recommended.rules,
  },
};
