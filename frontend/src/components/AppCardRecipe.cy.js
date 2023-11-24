import './commands';
// cypress/integration/my_component_spec.js
import AppCardRecipe from "./AppCardRecipe.vue";

describe("<AppCardRecipe />", () => {
  beforeEach(() => {
    // Pasa algunas props necesarias
    const recipe = {
      id: 1,
      title: "Test Recipe",
      rating_amount: 5,
    };
    const username = "testUser";
    const logged = true;
    const type = "rate";
    const visibleRecipes = 4;

    // Monta el componente pasando las props necesarias
    cy.mount(AppCardRecipe, {
      propsData: {
        recipe,
        username,
        logged,
        type,
        visibleRecipes,
      },
    });
  });

  it("renders correctly", () => {
    // Verifica que el componente se haya rendereado correctamente
    cy.get(".recipe-card").should("exist");
  });

  // Otras pruebas...
});