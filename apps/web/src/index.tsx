import { render } from 'react-dom';

import { initMonitoring } from '@/utils/monitoring';
import { reportWebVitals } from '@/utils/web-vitals';

import App from './App';
import './index.css';

render(<App />, document.querySelector('#app'));

// ? https://docs.sentry.io/platforms/javascript/guides/react/
initMonitoring();

// ? https://web.dev/vitals/
// ? If you want to report web vitals, you can pass a report handler (https://github.com/GoogleChrome/web-vitals#reporthandler)
reportWebVitals().catch(console.error);
