beforeEach(() => {
  cy.visit('/');
});

it('should display home', () => {
  cy.title().should('match', /home/i);

  cy.findByRole('heading', { name: /home/i }).should('be.visible');
  cy.findByText(/hello world/i).should('be.visible');
});
