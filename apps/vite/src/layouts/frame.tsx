import { ErrorBoundary } from '@sentry/react';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';
import { Outlet } from 'react-router-dom';

import Fallback from '@/components/fallback';

export default function Frame() {
  const intl = useIntl();
  const [lang] = intl.locale.split('-');

  return (
    <>
      <Helmet
        titleTemplate="template-react | vite | %s"
        defaultTitle="template-react | vite"
      >
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
      <div className="grid min-h-[100dvh] place-items-center p-4 dark:bg-gray-900 dark:text-gray-100">
        <ErrorBoundary fallback={Fallback} showDialog>
          <Outlet />
        </ErrorBoundary>
      </div>
    </>
  );
}
