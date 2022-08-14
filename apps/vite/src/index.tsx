import { createRoot } from 'react-dom/client';

import { initMonitoring } from '@/utils/monitoring';
import { reportWebVitals } from '@/utils/web-vitals';

import App from './App';
import './index.css';

const root = createRoot(document.querySelector('#app')!);
root.render(<App />);

// https://docs.sentry.io/platforms/javascript/guides/react/
initMonitoring();

// https://web.dev/vitals/
// If you want to report web vitals, you can pass a report handler (https://github.com/GoogleChrome/web-vitals#reporthandler)
try {
  await reportWebVitals();
} catch (error) {
  console.error(error);
}
