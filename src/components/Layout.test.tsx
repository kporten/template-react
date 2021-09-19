import React from 'react';
import { mount } from '@cypress/react';

import Test from '../Test';

import Layout from './Layout';

it('should display test', () => {
  mount(
    <Test>
      <Layout>test</Layout>
    </Test>,
  );

  cy.findByText('test').should('be.visible');
});
