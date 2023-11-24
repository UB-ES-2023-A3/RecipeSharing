const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    specPattern: "src/**/*.cy.js",
    supportFile: false,
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },
});
