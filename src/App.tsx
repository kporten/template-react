import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
        <Layout>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/settings" exact sensitive>
              <Settings />
            </Route>
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </Intl>
  </Store>
);

export default App;
