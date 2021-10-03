import React from 'react';

import Intl from '~providers/Intl';
import Store from '~providers/Store';
import { localeAtom } from '~store/locale';

import './tailwind.css';

const Test: React.FC = ({ children }) => (
  <Store values={[[localeAtom, 'en']]}>
    <Intl>{children}</Intl>
  </Store>
);

export default Test;
