import { Headline, cn } from '@template-react/ui-core';
import { FrownIcon } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const intl = useIntl();
  const routeError = useRouteError();

  let message = intl.formatMessage({
    id: 'pages.error.unexpected',
    defaultMessage: 'Unexpected Error',
  });

  if (isRouteErrorResponse(routeError) && routeError.status === 404) {
    message = intl.formatMessage({
      id: 'pages.error.not-found',
      defaultMessage: 'Not Found',
    });
  }

  return (
    <>
      <Helmet>
        <title>{message}</title>
      </Helmet>
      <div className="flex flex-col items-center space-y-4">
        <FrownIcon
          className={cn(
            'h-16 w-16 md:h-24 md:w-24',
            isRouteErrorResponse(routeError) ? 'text-sky-800' : 'text-red-500',
          )}
        />
        <Headline
          variant="h1"
          className={isRouteErrorResponse(routeError) && 'text-destructive'}
        >
          {message}
        </Headline>
      </div>
    </>
  );
}
