import type { StorybookConfig } from '@storybook/react-vite';

export default {
  addons: ['@storybook/addon-essentials', '@storybook/addon-styling'],
  docs: {
    autodocs: 'tag',
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../src/**/*.stories.@(ts|tsx|mdx)'],
} satisfies StorybookConfig;
