import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';
import { Outlet } from 'react-router-dom';

import Navigation from './Navigation/Navigation';

const Layout: React.VFC = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet titleTemplate="template-react | %s" defaultTitle="template-react">
        <html lang={intl.locale.split('-')[0]} />
        <meta name="description" content="template-react" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="rgb(6, 182, 212)"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="rgb(14, 116, 144)"
        />
      </Helmet>
      <div className="min-h-screen bg-white text-gray-900">
        <Navigation />
        <main className="container mx-auto p-4">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
