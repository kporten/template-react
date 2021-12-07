beforeEach(() => {
  cy.visit('/does-not-exist', {
    failOnStatusCode: false,
  });
});

it('should display not found', () => {
  cy.title().should('match', /not found/i);

  cy.findByRole('heading', { name: /not found/i }).should('be.visible');
});
