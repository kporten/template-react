export default function Text({ children }: { children: React.ReactNode }) {
  return <span className="text-base md:text-lg">{children}</span>;
}
