import React from 'react';
import { mount } from '@cypress/react';

import Layout from './Layout';
import Locale from './Locale';
import Test from '../providers/Test';

it('should change locale', () => {
  mount(
    <Test>
      <Layout>
        <Locale />
      </Layout>
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
