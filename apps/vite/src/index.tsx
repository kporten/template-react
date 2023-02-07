import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { initMonitoring } from '@/utils/monitoring';
import { reportWebVitals } from '@/utils/web-vitals';

import App from './app';
import './index.css';

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
// If you want to report web vitals, you can pass a report handler (https://github.com/GoogleChrome/web-vitals#reporthandler)
reportWebVitals().catch(console.error);
