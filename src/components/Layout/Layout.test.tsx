import { mount } from '@cypress/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Test from '~Test';

import Layout from './Layout';

it('should render layout', () => {
  mount(
    <Test>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>test</div>} />
        </Route>
      </Routes>
    </Test>,
  );

  cy.title().should('be.eq', 'template-react');
  cy.root().should('have.attr', 'lang', 'en');
  cy.findByText('test').should('be.visible');
});
