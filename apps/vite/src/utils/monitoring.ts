// ? https://docs.sentry.io/platforms/javascript/guides/react/
import { init } from '@sentry/react';

import { name, version } from '../../package.json';

export const initMonitoring = () => {
  init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    environment: import.meta.env.MODE,
    release: `${name}@${version}`,
  });
};
