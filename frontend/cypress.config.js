const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    specPattern: "src", // Ruta relativa al directorio raíz donde se encuentran tus componentes
    testFiles: "**/*.cy.js", // Patrón para buscar archivos de prueba
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },
});
