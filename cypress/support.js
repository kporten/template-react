import '@cypress/code-coverage/support';
import '@testing-library/cypress/add-commands';

Cypress.on('window:before:load', (win) => {
  Object.defineProperty(win.navigator, 'language', { value: 'en' });
  Object.defineProperty(win.navigator, 'languages', { value: ['en'] });
});
