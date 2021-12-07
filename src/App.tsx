import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '~components/Layout/Layout';
import Home from '~pages/Home/Home';
import NotFound from '~pages/NotFound/NotFound';
import Settings from '~pages/Settings/Settings';
import Intl from '~providers/Intl/Intl';
import Store from '~providers/Store/Store';

import './tailwind.css';

const App: React.VFC = () => (
  <Store>
    <Intl>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Intl>
  </Store>
);

export default App;
