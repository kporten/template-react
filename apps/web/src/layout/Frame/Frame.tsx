import { ErrorBoundary } from '@sentry/react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';
import { Outlet } from 'react-router-dom';

import Fallback from '@/components/Fallback/Fallback';

export default function Frame() {
  const intl = useIntl();
  const [lang] = intl.locale.split('-');

  return (
    <>
      <Helmet titleTemplate="template-react | %s" defaultTitle="template-react">
        <html lang={lang} />
        <meta name="description" content="template-react" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="rgb(56 189 248)"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="rgb(7 89 133)"
        />
      </Helmet>
      <main className="grid min-h-screen place-items-center p-4 dark:bg-gray-900 dark:text-gray-100">
        <ErrorBoundary fallback={Fallback} showDialog>
          <Outlet />
        </ErrorBoundary>
      </main>
    </>
  );
}
