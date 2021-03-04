import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#app'),
);

export default App;
