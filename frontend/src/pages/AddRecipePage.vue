<template>
  <div class="mainContainer" style="color: black">
    <div class="form-background">
      <div class="mainTitle" style="color: #ff5733">
        <h1>Add Recipe</h1>
      </div>
      <form @submit.prevent="addRecipe" class="form">
        <div class="form-group">
          <label for="recipeName">Name of the recipe:</label>
          <AppTextField
            :defaultMessage="defaultMessageRecipe"
            @update:textValue="recipeName = $event"
          />
        </div>

        <div class="form-group">
          <label for="ingredients">Ingredients:</label>
          <select
            id="ingredients"
            v-model="selectedIngredient"
            @change="addIngredient"
            class="full-width-dropdown"
          >
            <option value="" disabled>Select an ingredient</option>
            <optgroup v-for="group in ingredientsList" :label="group.groupName" :key="group.groupName">
              <option v-for="ingredient in group.options" :value="ingredient" :key="ingredient">
                {{ ingredient }}
              </option>
            </optgroup>
          </select>
        </div>

        <div class="form-group">
          <label for="selectedIngredients">Selected Ingredients:</label>
          <div class="selected-box">
            <ul class="ingredient-list">
              <li v-for="ingredient in allSelectedIngredients" :key="ingredient">{{ ingredient }}</li>
            </ul>
          </div>
        </div>

        <div class="form-group">
          <label for="instructions">Instructions:</label>
          <textarea id="instructions" v-model="instructions" rows="4" required class="full-width-textarea"></textarea>
        </div>

        <div class="form-group">
          <label for="recipeType">Type of recipe:</label>
          <select id="recipeType" v-model="selectedRecipeType" required class="full-width-dropdown">
            <option value="" disabled>Select a recipe type</option>
            <option v-for="type in recipeTypes" :value="type" :key="type">{{ type }}</option>
          </select>
        </div>

        <div class="form-group">
          <label for="allergens">Allergens:</label>
          <select
            id="allergens"
            v-model="selectedAllergen"
            @change="addAllergen"
            class="full-width-dropdown"
          >
            <option value="" disabled>Select an allergen</option>
            <optgroup v-for="group in allergensList" :label="group.groupName" :key="group.groupName">
              <option v-for="allergen in group.options" :value="allergen" :key="allergen">
                {{ allergen }}
              </option>
            </optgroup>
          </select>
        </div>

        <div class="form-group">
          <label for="selectedAllergens">Selected Allergens:</label>
          <div class="selected-box">
            <ul class="allergen-list">
              <li v-for="allergen in allSelectedAllergens" :key="allergen">{{ allergen }}</li>
            </ul>
          </div>
        </div>

        <div class="form-group">
          <label for="preparationTime">Preparation time:</label>
          <select id="preparationTime" v-model="preparationTime" class="full-width-dropdown">
            <option value="" disabled>Select preparation time</option>
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="45">45 minutes</option>
            <option value="60">1 hour</option>
            <option value="90">1 hour 30 minutes</option>
            <option value="120">2 hours</option>
          </select>
        </div>

        <div class="form-group">
          <label for="servings">Servings:</label>
          <input type="number" id="servings" v-model="servings" class="full-width-dropdown">
        </div>

        <div class="secondaryContainer" style="background-color: white">
          <button type="submit" class="submit-button">Add Recipe</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AppTextField from "@/components/AppTextField.vue";

export default {
    components: {AppTextField},
    data() {
        return {
            recipeName: '',
            selectedIngredient: '', // Ingredient currently selected in the dropdown
            selectedIngredients: [], // Accumulated list of selected ingredients
            instructions: '',
            selectedRecipeType: '',
            selectedAllergen: '', // Allergen currently selected in the dropdown
            selectedAllergens: [], // Accumulated list of selected allergens
            preparationTime: '',
            servings: '',
            defaultMessageRecipe: "Introduce the name of your recipe",
            ingredientsList: [
                {
                    groupName: "Fruits",
                    options: [
                        "Apple",
                        "Banana",
                        "Orange",
                        "Strawberry",
                        "Grapes",
                        "Mango",
                    ],
                },
                {
                    groupName: "Vegetables",
                    options: [
                        "Carrot",
                        "Broccoli",
                        "Spinach",
                        "Tomato",
                        "Cucumber",
                        "Cauliflower",
                    ],
                },
                {
                    groupName: "Meat",
                    options: ["Chicken", "Beef", "Pork", "Lamb", "Turkey", "Duck"],
                },
                {
                    groupName: "Dairy",
                    options: ["Milk", "Cheese", "Yogurt", "Butter", "Cream", "Eggs"],
                },
                {
                    groupName: "Grains",
                    options: ["Rice", "Pasta", "Bread", "Oats", "Quinoa", "Barley"],
                },
                {
                    groupName: "Seafood",
                    options: ["Salmon", "Shrimp", "Tuna", "Lobster", "Crab", "Scallops"],
                },
            ],
            allergensList: [
                {
                    groupName: "Common Allergens",
                    options: [
                        "Milk",
                        "Eggs",
                        "Peanuts",
                        "Tree Nuts (such as almonds, walnuts, cashews, pistachios, and pecans)",
                        "Soy",
                        "Wheat",
                        "Fish",
                        "Shellfish (such as crab, lobster, and shrimp)",
                    ],
                },
                {
                    groupName: "Fruits",
                    options: [
                        "Apple",
                        "Banana",
                        "Orange",
                        "Strawberry",
                        "Grapes",
                        "Mango",
                    ],
                },
                {
                    groupName: "Vegetables",
                    options: [
                        "Carrot",
                        "Broccoli",
                        "Spinach",
                        "Tomato",
                        "Cucumber",
                        "Cauliflower",
                    ],
                },
                {
                    groupName: "Meat",
                    options: [
                        "Chicken",
                        "Beef",
                        "Pork",
                        "Lamb",
                        "Turkey",
                        "Duck",
                    ],
                },
                {
                    groupName: "Dairy Alternatives",
                    options: [
                        "Soy Milk",
                        "Almond Milk",
                        "Coconut Milk",
                        "Oat Milk",
                    ],
                },
            ],
            recipeTypes: ['American', 'Italian', 'Mediterranean', 'Mexican', 'Indian', 'Chinese', 'Japanese', 'Thai', 'Greek', 'French', 'Spanish'],
        };
    },
    computed: {
        allSelectedIngredients() {
            return [...new Set(this.selectedIngredients)]; // Remove duplicates
        },
        allSelectedAllergens() {
            return [...new Set(this.selectedAllergens)]; // Remove duplicates
        },
    },
    methods: {
        addIngredient() {
            if (this.selectedIngredient) {
                this.selectedIngredients.push(this.selectedIngredient);
                this.selectedIngredient = ''; // Reset the selection
            }
        },
        addAllergen() {
            if (this.selectedAllergen) {
                this.selectedAllergens.push(this.selectedAllergen);
                this.selectedAllergen = ''; // Reset the selection
            }
        },
        addRecipe() {
            // Handle form submission here
            const newRecipe = {
                name: this.recipeName,
                ingredients: this.allSelectedIngredients,
                instructions: this.instructions,
                type: this.selectedRecipeType,
                allergens: this.allSelectedAllergens,
                preparationTime: this.preparationTime,
                servings: this.servings,
            };
            console.log(newRecipe); // Replace with your data handling logic
        },
    },
};
</script>

<style scoped>
.selected-box {
  background-color: #f0f0f0;
  padding: 10px;
  border: 1px solid #ccc;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column; /* Aplicar diseño de columna a los elementos */
  align-items: flex-start; /* Alinear elementos a la izquierda */
}

.selected-box h2 {
  font-size: 16px;
  margin-top: 0;
}

.full-width-dropdown,
.full-width-textarea {
  margin-top: 10px;
  width: 100%;
  resize: vertical;
}

.ingredient-list,
.allergen-list {
  list-style-type: none; /* Quitar viñetas de la lista */
  padding: 0;
}

.ingredient-list li,
.allergen-list li {
  margin: 0;
  padding: 0;
}

input {
  margin-top: 10px;
}
</style>