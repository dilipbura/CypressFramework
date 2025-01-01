Feature: Signup and Login Test Suite
  This test suite validates the signup and login functionalities, including account creation, authentication, and user session management.

  Scenario: User can create an account with valid data
    And I navigate to the signup page
    When I enter my first name "John"
    And I enter my last name "Doe"
    When I enter a valid email for signup "random"
    And I enter a new password "Password123"
    And I confirm the new password "Password123"
    And I submit the signup form
    Then I should see a success message "Thank you for registering with Main Website Store."
    When The user clicks on the welcome button
    And The user clicks on the signout button

  Scenario: Login with valid credentials
    And I navigate to the CustomerLogin page
    When The user enters their email "john.doe2256@example.com"
    And The user enters their password "Password123"
    And The user clicks on the signin button in CustomerLogin page
    Then I should see my account dashboard with a welcome message
    When The user clicks on the welcome button
    And The user clicks on the signout button

  Scenario: Login with invalid credentials
    And I navigate to the login page
    When I enter an invalid email "john.doe1@example.com"
    And I enter an invalid password "Password1234"
    And I submit the login form
    Then I should see an error message "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later."
    And I should remain on the login page
