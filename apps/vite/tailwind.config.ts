// https://tailwindcss.com/docs/configuration

import { defaultPreset } from '@template-react/ui-core';
import type { Config } from 'tailwindcss';

export default {
  presets: [defaultPreset],
  content: [
    'node_modules/@template-react/ui-core/dist/*.js',
    './index.html',
    './src/**/*.tsx',
  ],
} satisfies Config;
