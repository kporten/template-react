import type { Meta, StoryObj } from '@storybook/react';

import { Headline } from '@/components/headline';

const meta = {
  title: 'Core/Components/Headline',
  component: Headline,
  tags: ['autodocs'],
  args: {
    children: 'Headline',
  },
} satisfies Meta<typeof Headline>;

export default meta;

type Story = StoryObj<typeof meta>;

export const VariantDefault: Story = {};

export const VariantH2: Story = {
  args: {
    variant: 'h2',
  },
};

export const VariantH3: Story = {
  args: {
    variant: 'h3',
  },
};

export const VariantH4: Story = {
  args: {
    variant: 'h4',
  },
};
