type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="grid min-h-screen place-items-center dark:bg-gray-900 dark:text-gray-100">
      <div className="p-4">
        <h1 className="mb-8 bg-gradient-to-r bg-clip-text font-template text-6xl text-transparent md:text-8xl from-sky-400 to-sky-800">
          Template React
        </h1>
        <main>{children}</main>
      </div>
    </div>
  );
}
