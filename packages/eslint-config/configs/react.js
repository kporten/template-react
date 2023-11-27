import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

import { GLOB_TSX } from '../utils/glob.js';

import typescriptConfig from './typescript.js';

/** @type {import('eslint').Linter.FlatConfig} */
export default {
  files: [GLOB_TSX],
  plugins: {
    react: reactPlugin,
    'react-hooks': reactHooksPlugin,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    ...reactPlugin.configs.recommended.rules,
    ...reactPlugin.configs['jsx-runtime'].rules,
    ...reactHooksPlugin.configs.recommended.rules,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['function'],
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: ['variable'],
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        modifiers: ['global'],
      },
      ...typescriptConfig.rules['@typescript-eslint/naming-convention'].slice(
        1,
      ),
    ],
    'react/boolean-prop-naming': [
      'error',
      {
        validateNested: true,
      },
    ],
    'react/destructuring-assignment': [
      'error',
      'always',
      {
        destructureInSignature: 'always',
      },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/hook-use-state': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'never',
        propElementValues: 'always',
      },
    ],
    'react/jsx-fragments': 'error',
    'react/jsx-handler-names': [
      'error',
      {
        checkLocalVariables: true,
      },
    ],
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-leaked-render': 'error',
    'react/jsx-no-useless-fragment': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    'react/self-closing-comp': 'error',
  },
};
