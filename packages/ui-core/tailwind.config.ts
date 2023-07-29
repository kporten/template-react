// https://tailwindcss.com/docs/configuration

import type { Config } from 'tailwindcss';

import defaultPreset from './src/presets/default';

export default {
  presets: [defaultPreset],
  content: ['./src/**/*.tsx', './.storybook/**/*.ts'],
} satisfies Config;
