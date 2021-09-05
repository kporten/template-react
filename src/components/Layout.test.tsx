import React from 'react';
import { mount } from '@cypress/react';

import Layout from './Layout';
import Test from '../providers/Test';

it('should display test', () => {
  mount(
    <Test>
      <Layout>test</Layout>
    </Test>,
  );

  cy.findByText('test').should('be.visible');
});
