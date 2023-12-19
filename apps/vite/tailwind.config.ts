/* eslint-disable unicorn/prefer-module */
import path from 'node:path';

import { defaultPreset } from '@template-react/ui-core';
import type { Config } from 'tailwindcss';

// https://tailwindcss.com/docs/configuration
export default {
  presets: [defaultPreset],
  content: [
    path.join(path.dirname(require.resolve('@template-react/ui-core')), '*.js'),
    './index.html',
    './src/**/*.tsx',
  ],
} satisfies Config;
