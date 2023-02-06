type HeadlineProps = {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: 'default' | 'error';
};

export default function Headline({
  children,
  level,
  variant = 'default',
}: HeadlineProps) {
  const Tag: keyof JSX.IntrinsicElements = `h${level ?? 1}`;

  return (
    <Tag
      className={`bg-gradient-to-r bg-clip-text font-template text-6xl text-transparent md:text-8xl ${
        variant === 'error'
          ? 'from-red-400 to-red-500'
          : 'from-sky-400 to-sky-800'
      }`}
    >
      {children}
    </Tag>
  );
}
