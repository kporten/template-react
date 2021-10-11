beforeEach(() => {
  cy.visit('/does-not-exist', {
    failOnStatusCode: false,
  });
});

it('should display error 404', () => {
  cy.title().should('match', /not found/i);

  cy.findByRole('heading', { name: /not found/i }).should('be.visible');
});
