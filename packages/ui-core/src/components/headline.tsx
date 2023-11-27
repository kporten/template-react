import { type VariantProps, cva } from 'class-variance-authority';
import type { ClassValue } from 'clsx';
import type { JSX, ReactNode } from 'react';

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
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const Element: keyof JSX.IntrinsicElements = variant ?? 'h1';

  return (
    <Element className={cn(variants({ className, variant }))}>
      {children}
    </Element>
  );
}
