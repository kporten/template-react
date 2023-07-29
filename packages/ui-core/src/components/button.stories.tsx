import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/button';

const meta = {
  title: 'Core/Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const VariantDefault: Story = {};

export const VariantDestructive: Story = {
  args: {
    variant: 'destructive',
  },
};

export const VariantOutline: Story = {
  args: {
    variant: 'outline',
  },
};

export const VariantSecondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const VariantGhost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const VariantLink: Story = {
  args: {
    variant: 'link',
  },
};
