// https://tailwindcss.com/docs/configuration

import headlessuiPlugin from '@headlessui/tailwindcss';
import type { Config } from 'tailwindcss';

export default {
  content: [
    'index.html',
    './src/**/*.tsx',
    // add paths of imported packages if tailwind is used
    // '../packages/ui/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        template: ['Leckerli One'],
      },
    },
  },
  plugins: [headlessuiPlugin],
} satisfies Config;
