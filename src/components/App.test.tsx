// ? https://testing-library.com/docs/cypress-testing-library/intro/

import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

it('should render my app', () => {
  mount(<App />);

  cy.findByRole('heading').should('contain.text', 'application');
});

it('should render different emojis over time', () => {
  cy.clock();

  mount(<App />);

  cy.findByRole('heading').should('contain.text', '💻');

  cy.tick(2000);
  cy.findByRole('heading').should('contain.text', '👍');

  cy.tick(2000);
  cy.findByRole('heading').should('contain.text', '😃');

  cy.tick(2000);
  cy.findByRole('heading').should('contain.text', '💻');
});
