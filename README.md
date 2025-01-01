# Cypress BDD Cucumber POM Example

This project demonstrates how to use **Cypress** with **BDD (Behavior-Driven Development)** using **Cucumber** for writing test scenarios and **Page Object Model (POM)** for structuring the tests. The goal is to separate test logic from page interaction and ensure reusable and maintainable code.

## Project Structure

The project is organized as follows:

- **cypress/e2e/Features**: Contains Gherkin feature files (e.g., `.feature` files) that describe the application's behavior in natural language.
- **cypress/e2e/Pages**: Contains the Page Object classes that abstract the interaction with the UI elements.
- **cypress/e2e/Tests**: Contains test scripts that bind the Gherkin feature files with the Page Object Model.
- **cypress/reports**: Directory where test reports are generated.
- **cypress.config.js**: Cypress configuration file.
- **package.json**: Contains project dependencies and scripts.

## Prerequisites

Before running the tests, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Cypress](https://www.cypress.io/) (installed via npm)
- [Cucumber](https://cucumber.io/) for BDD

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>


Install dependencies:
 
      npm install

Running the Tests
You can run the Cypress tests with Cucumber support using the following command:

npx cypress open

Alternatively, to run tests headlessly, use the command:

npx cypress run
