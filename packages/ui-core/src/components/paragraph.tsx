import type { ClassValue } from 'clsx';

import { cn } from '@/utils/styles';

export default function Paragraph({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: ClassValue;
}) {
  return (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}>
      {children}
    </p>
  );
}
