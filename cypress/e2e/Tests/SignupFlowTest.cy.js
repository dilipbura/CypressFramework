import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import signupPage from '../Pages/SignupPage.cy.js';  // Signup page object
import loginFlowValidCredentialsPage from '../Pages/LoginFlowValidCredentialsPage.cy.js';  // Valid login page object
import loginFlowInvalidCredentialsPage from '../Pages/LoginFlowInvalidCredentialsPage.cy.js';  // Invalid login page object

// Scenario 1: User can create an account with valid data
Given('I navigate to the signup page', () => {
  signupPage.navigateToSignupPage();
});

When('I enter my first name {string}', (firstName) => {
  signupPage.enterFirstName(firstName);
});

When('I enter my last name {string}', (lastName) => {
  signupPage.enterLastName(lastName);
});

When('I enter a valid email for signup {string}', (email) => {
  if (email === "random") {
    const randomEmail = `user_${Date.now()}@example.com`; // Generate a unique email
    signupPage.enterEmail(randomEmail);
    cy.wrap(randomEmail).as('generatedEmail'); // Store the email for later use
  } else {
    signupPage.enterEmail(email); // Use the provided email
  }
});


When('I enter a new password {string}', (password) => {
  signupPage.enterPassword(password);
});

When('I confirm the new password {string}', (confirmPassword) => {
  signupPage.enterConfirmPassword(confirmPassword);
});

When('I submit the signup form', () => {
  signupPage.submitSignupForm();
});

Then('I should see a success message {string}', (successMessage) => {
  signupPage.verifySuccessMessage(successMessage);
});

When('The user clicks on the welcome button', () => {
  signupPage.clickWelcomeButton();
});

And('The user clicks on the signout button', () => {
  signupPage.clickLogoutButton();
});

// Scenario 2: Login with valid credentials
Given('I navigate to the CustomerLogin page', () => {
  loginFlowValidCredentialsPage.navigateToSigninPage();
});

When('The user enters their email {string}', (email) => {
  loginFlowValidCredentialsPage.enterEmail(email);
});

When('The user enters their password {string}', (password) => {
  loginFlowValidCredentialsPage.enterPassword(password);
});

When('The user clicks on the signin button in CustomerLogin page', () => {
  loginFlowValidCredentialsPage.clickLoginButton();
});

Then('I should see my account dashboard with a welcome message', () => {
  loginFlowValidCredentialsPage.verifyDashboardPage();
});

When('The user clicks on the welcome button', () => {
  loginFlowValidCredentialsPage.clickWelcomeButton();
});

And('The user clicks on the signout button', () => {
  loginFlowValidCredentialsPage.clickLogoutButton();
});

// Scenario 3: Login with invalid credentials
Given('I navigate to the login page', () => {
  loginFlowInvalidCredentialsPage.navigateToLoginPage();
});

When('I enter an invalid email {string}', (email) => {
  loginFlowInvalidCredentialsPage.enterEmail(email);
});

When('I enter an invalid password {string}', (password) => {
  loginFlowInvalidCredentialsPage.enterPassword(password);
});

When('I submit the login form', () => {
  loginFlowInvalidCredentialsPage.submitLogin();
});

Then('I should see an error message {string}', (errorMessage) => {
  loginFlowInvalidCredentialsPage.verifyErrorMessage(errorMessage);
});


And('I should remain on the login page', () => {
  cy.url().should('include', '/customer/account/login');
});
