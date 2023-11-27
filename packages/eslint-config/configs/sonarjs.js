import sonarjsPlugin from 'eslint-plugin-sonarjs';

import { GLOB_TS, GLOB_TSX } from '../utils/glob.js';

/** @type {import('eslint').Linter.FlatConfig} */
export default {
  files: [GLOB_TS, GLOB_TSX],
  plugins: {
    sonarjs: sonarjsPlugin,
  },
  rules: {
    ...sonarjsPlugin.configs.recommended.rules,
  },
};
