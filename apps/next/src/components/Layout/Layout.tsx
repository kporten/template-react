type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="grid min-h-screen place-items-center p-4 dark:bg-gray-900 dark:text-gray-100">
      {children}
    </div>
  );
}
