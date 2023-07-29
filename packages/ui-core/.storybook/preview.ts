import { withThemeByClassName } from '@storybook/addon-styling';
import type { Preview } from '@storybook/react';

import '@/index.css';

export default {
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: { disable: true },
    layout: 'centered',
  },
} satisfies Preview;
