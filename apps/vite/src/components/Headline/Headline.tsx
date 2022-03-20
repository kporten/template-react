export enum HeadlineVariant {
  Default,
  Error,
}

type HeadlineProps = {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: HeadlineVariant;
};

export default function Headline({
  children,
  level,
  variant = HeadlineVariant.Default,
}: HeadlineProps) {
  const Tag: keyof JSX.IntrinsicElements = `h${level ?? 1}`;

  return (
    <Tag
      className={`bg-gradient-to-r bg-clip-text font-template text-6xl text-transparent md:text-8xl ${
        variant === HeadlineVariant.Error
          ? 'from-red-400 to-red-500'
          : 'from-sky-400 to-sky-800'
      }`}
    >
      {children}
    </Tag>
  );
}
