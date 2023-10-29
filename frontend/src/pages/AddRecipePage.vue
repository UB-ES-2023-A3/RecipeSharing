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
            v-model="recipeName"
            @update:textValue="handleTextFieldValueUpdate"
          />
        </div>

        <div class="form-group">
          <label for="ingredients">Ingredients:</label>
          <DropdownSelect
            :options="ingredientsList"
            v-model="selectedIngredients"
            label="an ingredient"
            groupTitle="Selected Ingredients"
            @update:selectedValue="handleIngredientsUpdate"
          />
        </div>

        <div class="form-group">
            <label for="instructions">Instructions:</label>
            <TextArea
              :defaultMessage="defaultMessageInstructions"
              v-model="instructions"
              @update:textValue="handleInstructionsUpdate"
            />
        </div>

        <div class="form-group">
          <label for="recipeType">Type of recipe:</label>
          <DropdownSelect
            :options="recipeTypes"
            v-model="selectedRecipeType"
            label="Recipe type"
            groupTitle="Selected Type"
            @update:selectedValue="handleTypesUpdate"
          />
        </div>

        <div class="form-group">
          <label for="allergens">Allergens:</label>
          <DropdownSelect
            :options="allergensList"
            v-model="selectedAllergens"
            label="an allergen"
            groupTitle="Selected Allergens"
            @update:selectedValue="handleAllergensUpdate"
          />
        </div>

        <div class="form-group">
          <label for="preparationTime">Preparation time:</label>
          <DropdownSelect
            :options="preparationTimeOptions"
            v-model="preparationTime"
            label="preparation time"
            groupTitle="Selected Preparation Time"
            @update:selectedValue="handleTimeUpdate"
          />
        </div>

        <div class="form-group">
          <label for="servings">Servings:</label>
          <input type="number" id="servings" v-model="servings" class="full-width-dropdown">
        </div>

        <div class="error-message" v-if="showErrorMessage">
          {{ errorMessage }}
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
import DropdownSelect from "@/components/AppDropdownSelect.vue";
import TextArea from "@/components/AppTextArea.vue";
import axios from "axios";
import ingredientsData from "@/assets/lists/Ingredients.json";
import allergensData from "@/assets/lists/Allergens.json";
import typesData from "@/assets/lists/Types.json";
import prepTimeData from "@/assets/lists/prepTime.json";




export default {
  components: { AppTextField, DropdownSelect, TextArea },
  data() {
    return {
      recipeName: "",
      selectedIngredients: "",
      instructions: "",
      selectedRecipeType: "",
      selectedAllergens: "",
      preparationTime: "",
      servings: "",
      defaultMessageRecipe: "Introduce the name of your recipe",
      showErrorMessage: false,
      errorField: null,
      errorMessages: {
        recipeName: "Please enter the recipe name.",
        selectedIngredients: "Please select at least one ingredient.",
        selectedAllergens: "Please select at least one allergen.",
        instructions: "Please provide instructions for the recipe.",
        selectedRecipeType: "Please select a recipe type.",
        preparationTime: "Please select the preparation time.",
        servings: "Please enter the number of servings.",
      },
      ingredientsList: ingredientsData,
      allergensList: allergensData,
      recipeTypes: typesData,
      preparationTimeOptions: prepTimeData,
    };
  },
  computed: {
    allSelectedIngredients() {
      return [...new Set(this.selectedIngredients)];
    },
    allSelectedAllergens() {
      return [...new Set(this.selectedAllergens)];
    },
  },
  methods: {
    checkForm() {
      this.showErrorMessage = false;
      this.errorField = null;

      if (!this.recipeName) {
        this.errorField = "recipeName";
      } else if (this.selectedIngredients.length === 0) {
        this.errorField = "selectedIngredients";
      } else if (!this.instructions) {
        this.errorField = "instructions";
      } else if (!this.selectedRecipeType) {
        this.errorField = "selectedRecipeType";
      } else if (this.preparationTime === "") {
        this.errorField = "preparationTime";
      } else if (this.servings === "") {
        this.errorField = "servings";
      } else if (this.selectedAllergens.length === 0) {
        this.errorField = "selectedAllergens";
      }

      if (this.errorField) {
        this.showErrorMessage = true;
        this.errorMessage = this.errorMessages[this.errorField];
      }
    },
    handleTextFieldValueUpdate(value) {
        this.recipeName = value;
    },
    handleIngredientsUpdate(value) {
      this.selectedIngredients = value;
    },
    handleInstructionsUpdate(value) {
      this.instructions = value;
    },
    handleTypesUpdate(value) {
      this.selectedRecipeType = value;
    },
    handleAllergensUpdate(value) {
      this.selectedAllergens = value;
    },
    handleTimeUpdate(value) {
      this.preparationTime = parseInt(value);
    },
    addRecipe() {
      this.checkForm();

      if (this.showErrorMessage) {
        return;
      }

      axios
        .post("/addRecipe/", {
          name: this.recipeName,
          ingredients: this.allSelectedIngredients,
          instructions: this.instructions,
          type: this.selectedRecipeType,
          allergens: this.allSelectedAllergens,
          preparationTime: this.preparationTime,
          servings: this.servings,
          kcal: 5,
          username_id: "1",
        })
        .then((response) => {
          if (response.status === 200) {
            console.log("Recipe added");
            alert("Recipe added.");
            this.$router.push("/");
          }
        })
        .catch((error) => {
          alert(error.response);
        });
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
  flex-direction: column;
  align-items: flex-start;
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
  list-style-type: none;
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

.selected-value {
  margin-top: 10px;
  color: #666;
}
</style>
