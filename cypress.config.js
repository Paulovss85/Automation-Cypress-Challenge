const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://front.serverest.dev',
    specPattern: "cypress/tests/**/*.cy.js",
    supportFile: 'cypress/support/commands.js',
    video: false,
    reporter: 'mochawesome',
    reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
    }
  },
});
