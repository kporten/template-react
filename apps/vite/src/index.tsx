import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@/app';
import '@/index.css';
import { initMonitoring } from '@/utils/monitoring';
import { reportWebVitals } from '@/utils/web-vitals';

// https://docs.sentry.io/platforms/javascript/guides/react/
initMonitoring();

// render app
const element = document.querySelector('#app');

if (element) {
  const root = createRoot(element);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

// https://web.dev/vitals/
try {
  // If you want to report web vitals, you can pass a report handler (https://github.com/GoogleChrome/web-vitals#reporthandler)
  await reportWebVitals();
} catch (error) {
  console.error(error);
}
