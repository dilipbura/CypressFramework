const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    // Specify the pattern for .feature files
    specPattern: "**/*.feature",
    pageLoadTimeout: 20000,
    
    // Set up event listeners for preprocessor and reporter
    setupNodeEvents(on, config) {
      // Enable cucumber preprocessor
      on("file:preprocessor", cucumber());
    },
    
    // Configure reporter
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports", // Directory to store reports
      overwrite: true,             // Overwrite existing reports
      html: true,                  // Generate an HTML report
      json: true,                  // Generate a JSON report
    },
  },
});

