import type { Meta, StoryObj } from '@storybook/react';

import { Paragraph } from '@/components/paragraph';

const meta = {
  title: 'Core/Components/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  args: {
    children: 'Paragraph',
  },
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const VariantDefault: Story = {};
