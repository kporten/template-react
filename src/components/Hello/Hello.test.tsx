import { mount, unmount } from '@cypress/react';
import React from 'react';

import Test from '~Test';

import Hello from './Hello';

it('should display hello', () => {
  mount(
    <Test>
      <Hello />
    </Test>,
  );

  cy.root().should('contain.text', 'Hello World');
});

it('should display different emojis over time', () => {
  cy.clock();

  mount(
    <Test>
      <Hello />
    </Test>,
  );

  cy.root().should('contain.text', '💻');

  cy.tick(2000);
  cy.root().should('contain.text', '👍');

  cy.tick(2000);
  cy.root().should('contain.text', '😃');

  cy.tick(2000);
  cy.root().should('contain.text', '💻');

  unmount();
});
