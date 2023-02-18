import FaceFrownIcon from '@heroicons/react/24/outline/FaceFrownIcon';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import Headline from '@/components/headline';
import { cn } from '@/utils/styles';

export default function Error() {
  const intl = useIntl();
  const routeError = useRouteError();

  let message = intl.formatMessage({
    id: 'routes.error.unexpected',
    defaultMessage: 'Unexpected Error',
  });

  if (isRouteErrorResponse(routeError) && routeError.status === 404) {
    message = intl.formatMessage({
      id: 'routes.error.not-found',
      defaultMessage: 'Not Found',
    });
  }

  return (
    <>
      <Helmet>
        <title>{message}</title>
      </Helmet>
      <div className="flex flex-col items-center space-y-4">
        <FaceFrownIcon
          className={cn(
            'h-16 w-16 md:h-24 md:w-24',
            isRouteErrorResponse(routeError) ? 'text-sky-800' : 'text-red-500',
          )}
        />
        <Headline
          level={1}
          variant={isRouteErrorResponse(routeError) ? 'default' : 'error'}
        >
          {message}
        </Headline>
      </div>
    </>
  );
}
