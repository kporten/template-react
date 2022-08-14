// https://docs.sentry.io/platforms/javascript/guides/react/

import { init } from '@sentry/react';

import { name, version } from '../../package.json';

export function initMonitoring() {
  init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    environment: import.meta.env.MODE,
    release: `${name}@${version}`,
  });
}
