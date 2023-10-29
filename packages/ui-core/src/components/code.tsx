import type { ClassValue } from 'clsx';

import { cn } from '@/utils/styles';

export function Code({
  children,
  className,
}: {
  children: string;
  className?: ClassValue;
}) {
  return (
    <code
      className={cn(
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        className,
      )}
    >
      {children}
    </code>
  );
}
