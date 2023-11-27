import js from '@eslint/js';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

import { GLOB_TS, GLOB_TSX } from '../utils/glob.js';

/** @type {import('eslint').Linter.FlatConfig} */
export default {
  files: [GLOB_TS, GLOB_TSX],
  languageOptions: {
    parser: typescriptParser,
    parserOptions: {
      project: true,
    },
  },
  plugins: {
    '@typescript-eslint': typescriptPlugin,
  },
  rules: {
    ...js.configs.recommended.rules,
    eqeqeq: ['error', 'always'],
    'max-params': 'off',
    'no-console': [
      'error',
      {
        allow: ['info', 'error', 'warn'],
      },
    ],
    'no-duplicate-imports': 'error',
    'no-implicit-coercion': 'error',
    'no-promise-executor-return': 'error',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSEnumDeclaration',
      },
    ],
    'no-template-curly-in-string': 'error',
    'prefer-arrow-callback': 'error',
    ...typescriptPlugin.configs['recommended-type-checked'].rules,
    ...typescriptPlugin.configs['strict-type-checked'].rules,
    ...typescriptPlugin.configs['stylistic-type-checked'].rules,
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-exports': [
      'error',
      {
        fixMixedExportsWithInlineTypeSpecifier: true,
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'separate-type-imports',
      },
    ],
    '@typescript-eslint/max-params': [
      'error',
      {
        max: 3,
      },
    ],
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['typeLike'],
        format: ['PascalCase'],
      },
      {
        selector: ['property'],
        format: ['camelCase'],
      },
      {
        selector: ['property'],
        format: null,
        modifiers: ['requiresQuotes'],
      },
      {
        selector: ['variableLike'],
        format: ['camelCase'],
      },
      {
        selector: ['variable'],
        format: ['camelCase', 'UPPER_CASE'],
        modifiers: ['global'],
      },
      {
        selector: ['variable', 'typeProperty'],
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['as', 'has', 'is'],
      },
    ],
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/promise-function-async': 'error',
  },
};
