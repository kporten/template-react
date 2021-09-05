import React from 'react';
import { mount } from '@cypress/react';

import App from './App';

it('should render app', () => {
  mount(<App />);

  cy.findByRole('heading').should('contain.text', 'Hello World');
});
