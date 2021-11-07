import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '~components/Layout/Layout';
import Error404 from '~pages/404/404';
import Home from '~pages/Home/Home';
import Settings from '~pages/Settings/Settings';
import Intl from '~providers/Intl';
import Store from '~providers/Store';

import './tailwind.css';

const App: React.FC = () => (
  <Store>
    <Intl>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Intl>
  </Store>
);

export default App;
