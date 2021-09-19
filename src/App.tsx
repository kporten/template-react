import React from 'react';

import Intl from './providers/Intl';
import Store from './providers/Store';

import Hello from './components/Hello';
import Layout from './components/Layout';
import Locale from './components/Locale';

import './tailwind.css';

const App: React.FC = () => (
  <Store>
    <Intl>
      <Layout>
        <div className="flex flex-col items-center w-72 space-y-4">
          <Hello />
          <Locale />
        </div>
      </Layout>
    </Intl>
  </Store>
);

export default App;
