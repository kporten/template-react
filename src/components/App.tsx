import React from 'react';

import Hello from './Hello';
import Intl from '../providers/Intl/Intl';
import Layout from './Layout';
import Locale from './Locale';

const App: React.FC = () => (
  <Intl>
    <Layout>
      <div className="flex flex-col items-center w-72 space-y-4">
        <Hello />
        <Locale />
      </div>
    </Layout>
  </Intl>
);

export default App;
