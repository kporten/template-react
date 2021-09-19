import React from 'react';
import { mount, unmount } from '@cypress/react';

import Test from '../Test';

import Hello from './Hello';

it('should display hello', () => {
  mount(
    <Test>
      <Hello />
    </Test>,
  );

  cy.findByRole('heading').should('contain.text', 'Hello World');
});

it('should display different emojis over time', () => {
  cy.clock();

  mount(
    <Test>
      <Hello />
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
