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

  cy.findAllByRole('link', { name: /home/i, current: 'page' }).should('be.visible');

  cy.findByRole('link', { name: /settings/i })
    .should('be.visible')
    .click()
    .should('have.attr', 'aria-current', 'page');
});
