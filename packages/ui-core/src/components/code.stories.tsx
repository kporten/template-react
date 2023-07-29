import type { Meta, StoryObj } from '@storybook/react';

import Code from '@/components/code';

const meta = {
  title: 'Core/Components/Code',
  component: Code,
  tags: ['autodocs'],
  args: {
    children: 'console.log("Code")',
  },
} satisfies Meta<typeof Code>;

export default meta;

type Story = StoryObj<typeof meta>;

export const VariantDefault: Story = {};
