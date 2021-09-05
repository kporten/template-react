import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './utils/reportWebVitals';

import App from './components/App';

import './index.css';

ReactDOM.render(<App />, document.querySelector('#app'));

// ? https://web.dev/vitals/
// ? If you want to report web vitals, you can pass a report handler (https://github.com/GoogleChrome/web-vitals#reporthandler)
reportWebVitals().catch(console.error);
