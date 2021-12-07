import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Intl from '~providers/Intl/Intl';
import Store from '~providers/Store/Store';
import { localeAtom } from '~store/locale';

import './tailwind.css';

const Test: React.FC = ({ children }) => (
  <Store values={[[localeAtom, 'en']]}>
    <Intl>
      <MemoryRouter>{children}</MemoryRouter>
    </Intl>
  </Store>
);

export default Test;
