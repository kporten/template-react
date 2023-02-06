type TextProps = {
  children: React.ReactNode;
};

export default function Text({ children }: TextProps) {
  return <span className="text-base md:text-lg">{children}</span>;
}
