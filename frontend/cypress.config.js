const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    specPattern: "src/**/*.cy.js",
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },
});
