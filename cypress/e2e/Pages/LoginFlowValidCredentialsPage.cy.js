class LoginFlowValidCredentialsPage {
  // Navigate to the Sign In page
  navigateToSigninPage() {
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.get('[href="#contentarea"]~ul li:nth-of-type(2)',{ timeout: 300000 }).click();
  }

  // Enter Email
  enterEmail(email) {
    cy.get('#email').type(email);
  }

  // Enter Passwords
  enterPassword(password) {
    cy.get('#pass').type(password);
  }

  // Click the Login button
  clickLoginButton() {
    cy.get('#send2').click();  // Fixed the extra quote here
  }

  // Verify Dashboard Page after Login
  verifyDashboardPage() {
    cy.get('.logged-in').first()
  .should('be.visible')
  .and('contain.text', 'Welcome, John Doe!');

  }
  // Click the Welcome Button (User account menu)
  clickWelcomeButton() {
    cy.get('.customer-name.active button').click();  // Ensure 'active' class exists
  }

  // Click the Logout Button
  clickLogoutButton() {
    cy.get('.authorization-link > a:visible')
    .first()
    .should('contain.text', 'Sign Out') // Replace 'Sign Out' with the expected text
    .click();
  }
}

// Exporting the LoginFlowValidCredentialsPage instance for use in your tests
const loginFlowValidCredentialsPage = new LoginFlowValidCredentialsPage();
export default loginFlowValidCredentialsPage;
