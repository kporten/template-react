import React from 'react';

const Layout: React.FC = ({ children }) => (
  <main className="flex items-center justify-center h-screen bg-gradient-to-b from-cyan-400 dark:from-cyan-600 to-sky-500 dark:to-sky-700 text-white">
    {children}
  </main>
);

export default Layout;
