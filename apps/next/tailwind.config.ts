// https://tailwindcss.com/docs/configuration

import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './src/**/*.tsx',
    // add paths of imported packages if tailwind is used
    // ../packages/ui/**/*.tsx
  ],
  theme: {
    extend: {
      fontFamily: {
        template: ['var(--font-leckerli-one)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
} satisfies Config;
