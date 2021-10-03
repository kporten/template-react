import React from 'react';

const Layout: React.FC = ({ children }) => (
  <main className="flex items-center justify-center h-screen bg-gradient-to-r from-cyan-400 to-sky-500 text-white">
    {children}
  </main>
);

export default Layout;
