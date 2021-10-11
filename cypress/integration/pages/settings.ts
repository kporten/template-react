beforeEach(() => {
  cy.visit('/settings');
});

it('should display settings', () => {
  cy.title().should('match', /settings/i);

  cy.findByRole('heading', { name: /settings/i }).should('be.visible');
});

it('should change locale', () => {
  cy.findByRole('button', {
    name: /english/i,
  }).click();

  cy.findByRole('option', {
    name: /deutsch/i,
  }).click();

  cy.findByRole('button').should('contain.text', 'Deutsch');
  cy.title().should('match', /einstellungen/i);
  cy.root().should('have.attr', 'lang', 'de');
});
