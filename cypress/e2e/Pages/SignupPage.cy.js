class SignupPage {
  // Navigate to the signup page
  navigateToSignupPage() {
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.get('[href="#contentarea"]~ul li:nth-of-type(3)',{ timeout: 100000 }).click(); // Navigate to the 'Create Account' section
  }

  // Enter the first name in the signup form
  enterFirstName(firstName) {
    cy.get('#firstname').type(firstName);  // Ensure correct input field ID for first name
  }

  // Enter the last name in the signup form
  enterLastName(lastName) {
    cy.get('#lastname').type(lastName);  // Ensure correct input field ID for last name
  }

  // Enter the email address in the signup form
  enterEmail() {
    const randomEmail = `user_${Date.now()}@example.com`; // Generate a unique email
    cy.get('#email_address').type(randomEmail);          // Type the random email
    return randomEmail;                                  // Return the email for further assertions or use
  }
  
  // Enter the password in the signup form
  enterPassword(password) {
    cy.get('[title="Password"]').type(password);  // Ensure correct selector for password
  }

  // Enter the confirm password in the signup form
  enterConfirmPassword(confirmPassword) {
    cy.get('[title="Confirm Password"]').type(confirmPassword);  // Ensure correct selector for confirm password
  }

  // Submit the signup form
  submitSignupForm() {
    cy.get('[title="Create an Account"]').click();  // Ensure the 'Create Account' button is targeted correctly
  }

  // Verify that the success message appears after successful registration
  verifySuccessMessage(successMessage) {
    cy.get('[data-ui-id="message-success"] div', { timeout: 100000 })
  .should('be.visible')
  .and('contain.text', successMessage);

  }
  

  // Click the 'Welcome' button
  clickWelcomeButton() {
    cy.get('.customer-name:visible button').eq(0).click(); // Ensure 'active' class exists
  }

  // Click the logout button
  clickLogoutButton() {
    cy.get('.authorization-link > a:visible')
    .first()
    .should('contain.text', 'Sign Out') // Replace 'Sign Out' with the expected text
    .click();
  }
}

// Exporting the SignupPage instance for use in your tests
const signupPage = new SignupPage();
export default signupPage;
