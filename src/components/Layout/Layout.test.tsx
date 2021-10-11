import { mount } from '@cypress/react';
import React from 'react';

import Test from '~Test';

import Layout from './Layout';

it('should render layout', () => {
  mount(
    <Test>
      <Layout>test</Layout>
    </Test>,
  );

  cy.title().should('be.eq', 'template-react');
  cy.root().should('have.attr', 'lang', 'en');
  cy.findByText('test').should('be.visible');
});
