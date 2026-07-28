const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'a58o91',
  allowCypressEnv: false,

  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto do Curso de Cypress',
      reportPageTitle: 'Projeto do Curso de Cypress',
    },
    baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
