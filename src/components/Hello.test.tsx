import React from 'react';
import { mount, unmount } from '@cypress/react';

import Hello from './Hello';
import Layout from './Layout';
import Test from '../providers/Test';

it('should display hello', () => {
  mount(
    <Test>
      <Layout>
        <Hello />
      </Layout>
    </Test>,
  );

  cy.findByRole('heading').should('contain.text', 'Hello World');
});

it('should display different emojis over time', () => {
  cy.clock();

  mount(
    <Test>
      <Layout>
        <Hello />
      </Layout>
    </Test>,
  );

  cy.findByRole('heading').should('contain.text', '💻');

  cy.tick(2000);
  cy.findByRole('heading').should('contain.text', '👍');

  cy.tick(2000);
  cy.findByRole('heading').should('contain.text', '😃');

  cy.tick(2000);
  cy.findByRole('heading').should('contain.text', '💻');

  unmount();
});
