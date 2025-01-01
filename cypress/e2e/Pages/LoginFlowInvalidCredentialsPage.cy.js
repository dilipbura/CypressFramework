class LoginFlowInvalidCredentialsPage {
  // Navigate to the Login Page
  navigateToLoginPage() {
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.get('[href="#contentarea"]~ul li:nth-of-type(2)',{ timeout: 300000 }).click();
  }

  // Enter Email
  enterEmail(email) {
    cy.get('#email').type(email);
  }

  // Enter Password
  enterPassword(password) {
    cy.get('#pass').type(password);
  }

  // Submit the Login form
  submitLogin() {
    cy.get('#send2').click();
  }

  // Verify Error Message on Invalid Login
  verifyErrorMessage(errorMessage) {
    cy.get('[data-bind="html: $parent.prepareMessageForHtml(message.text)"]', { timeout: 10000 }) // Add timeout for async loading
      .should('be.visible')
      .and('contain.text', errorMessage); // Validate the error message text
  }
  
}

// Exporting the LoginFlowInvalidCredentialsPage instance for use in your tests
const loginFlowInvalidCredentialsPage = new LoginFlowInvalidCredentialsPage();
export default loginFlowInvalidCredentialsPage;
