const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    componentFolder: "frontend/src", // Ruta relativa al directorio raíz donde se encuentran tus componentes
    specPattern: "**/*.cy.js", // Patrón para buscar archivos de prueba
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },
});
