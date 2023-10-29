import { cva, type VariantProps } from 'class-variance-authority';
import type { ClassValue } from 'clsx';
import type { ReactNode } from 'react';

import { cn } from '@/utils/styles';

const variants = cva('scroll-m-20 tracking-tight', {
  variants: {
    variant: {
      h1: 'text-4xl font-extrabold lg:text-5xl',
      h2: 'border-b pb-2 text-3xl font-semibold transition-colors first:mt-0',
      h3: 'text-2xl font-semibold',
      h4: 'text-xl font-semibold',
    },
  },
  defaultVariants: {
    variant: 'h1',
  },
});

export function Headline({
  children,
  className,
  variant,
}: {
  children: ReactNode;
  className?: ClassValue;
} & VariantProps<typeof variants>) {
  const Tag: keyof JSX.IntrinsicElements = variant ?? 'h1';

  return <Tag className={cn(variants({ className, variant }))}>{children}</Tag>;
}
