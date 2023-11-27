import unicornPlugin from 'eslint-plugin-unicorn';

import { GLOB_TS, GLOB_TSX } from '../utils/glob.js';

/** @type {import('eslint').Linter.FlatConfig} */
export default {
  files: [GLOB_TS, GLOB_TSX],
  plugins: {
    unicorn: unicornPlugin,
  },
  rules: {
    ...unicornPlugin.configs.recommended.rules,
    'unicorn/no-null': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          arg: false,
          args: false,
          ctx: false,
          dst: false,
          env: false,
          param: false,
          params: false,
          prop: false,
          props: false,
          ref: false,
          req: false,
          res: false,
          src: false,
        },
      },
    ],
  },
};
