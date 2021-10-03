import { mount } from '@cypress/react';
import React from 'react';

import Test from '~Test';

import Locale from './Locale';

it('should change locale', () => {
  mount(
    <Test>
      <Locale />
    </Test>,
  );

  cy.findByRole('button', {
    name: /english/i,
  }).click();

  cy.findByRole('option', {
    name: /deutsch/i,
  }).click();

  cy.findByRole('button').should('contain.text', 'Deutsch');
});
