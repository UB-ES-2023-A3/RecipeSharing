const { defineConfig } = require("cypress");

// Configuración para pruebas de componentes
const componentTestingConfig = {
  component: {
    componentFolder: "frontend/src",
    testFiles: "**/*.cy.js",
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },
};

// Configuración para pruebas e2e
const e2eTestingConfig = {
  testFiles: "**/*.e2e.js",
  // Otras configuraciones para e2e si es necesario
};

// Configuración por defecto (común a ambas)
const defaultConfig = {
  // Otras configuraciones comunes
};

// Exporta ambas configuraciones
module.exports = defineConfig({
  // Combina la configuración por defecto con la configuración específica
  // ...defaultConfig,

  // Configuración específica para pruebas de componentes
  ...componentTestingConfig,

  // Configuración específica para pruebas e2e
  // Comenta o descomenta la siguiente línea según necesites ejecutar componentes o e2e
  // ...e2eTestingConfig,
});