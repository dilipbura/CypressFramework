// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Import cypress-xpath if using XPath selectors
require('cypress-xpath');

// -- Custom command to click the Revenue Calculator link --
Cypress.Commands.add('clickRevenueCalculatorLink', () => {
  cy.contains('span', 'Revenue Calculator').click();
  cy.contains('h5', 'Total Gross Revenue Per Year').should('be.visible');
});

// -- Custom command to navigate directly to the Revenue Calculator page --
Cypress.Commands.add('navigateToRevenueCalculator', () => {
  cy.visit('https://fitpeo.com/revenue-calculator');
});

// -- Custom command to verify slider value --
Cypress.Commands.add('verifySliderValue', (expectedValue) => {
  cy.get('input[type="range"]').should('have.value', expectedValue);
});

// -- Custom command to update slider value --
Cypress.Commands.add('updateSliderValue', (value) => {
  cy.get('input[type="number"]')
    .clear()
    .type(value)
    .trigger('change'); // Trigger change event to update the UI
  cy.get('input[type="range"]').should('have.value', value);
});

// -- Custom command to select multiple CPT codes --
Cypress.Commands.add('selectCPTCodes', (codes) => {
  codes.forEach((code) => {
    cy.get(`input[type="checkbox"][value="${code}"]`).check();
  });
});

// -- Custom command to verify CPT codes selection --
Cypress.Commands.add('verifyCPTCodesSelection', (codes) => {
  codes.forEach((code) => {
    cy.get(`input[type="checkbox"][value="${code}"]`).should('be.checked');
  });
});

// -- Custom command to verify total reimbursement value --
Cypress.Commands.add('verifyReimbursement', (expectedAmount) => {
  cy.contains('p', 'Total Recurring Reimbursement for all Patients Per Month')
    .should('contain.text', expectedAmount);
});

// -- Example: Custom login command --
Cypress.Commands.add('login', (email, password) => {
  cy.get('#email').type(email);
  cy.get('#password').type(password);
  cy.get('button[type="submit"]').click();
});

// -- Example: Custom drag command --
Cypress.Commands.add('drag', { prevSubject: 'element' }, (subject, options) => {
  cy.wrap(subject).trigger('mousedown', { which: 1 });
  cy.get(options.target).trigger('mousemove').trigger('mouseup', { force: true });
});

// -- Example: Custom dismiss command --
Cypress.Commands.add('dismiss', { prevSubject: 'optional' }, (subject, options) => {
  cy.wrap(subject).click({ force: true });
});

// -- Overwrite Cypress's visit command to add default options --
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
  const defaults = { timeout: 10000 };
  return originalFn(url, { ...defaults, ...options });
});
