export default function Code({ children }: { children: string }) {
  return (
    <code className="mx-1 rounded bg-gray-200 p-1 font-mono dark:bg-gray-700">
      {children}
    </code>
  );
}
