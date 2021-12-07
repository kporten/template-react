beforeEach(() => {
  cy.visit('/');
});

it('should navigate through pages', () => {
  cy.url().should('be.eq', Cypress.config().baseUrl);

  cy.findByRole('link', { name: /settings/i }).click();
  cy.url().should('match', /\/settings$/);

  cy.findAllByRole('link', { name: /home/i }).click({ multiple: true });
  cy.url().should('be.eq', Cypress.config().baseUrl);
});
