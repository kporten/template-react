import { cn } from '@/utils/styles';

export default function Text({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn('text-base md:text-lg', className)}>{children}</span>
  );
}
