import { mount } from '@cypress/react';
import React from 'react';

import Test from '~Test';

import Navigation from './Navigation';

it('should display navigation', () => {
  mount(
    <Test>
      <Navigation />
    </Test>,
  );

  cy.findAllByRole('link', { name: /home/i }).should('be.visible');
  cy.findByRole('link', { name: /settings/i }).should('be.visible');
});
