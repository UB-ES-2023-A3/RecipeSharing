<template>
  <div class="recipe-card">
    <div class="header">
      <h2>{{ this.recipe.title }}</h2>
      <p><strong>Creation Date:</strong> {{ this.recipe.creation_date }}</p>
    </div>
    <div class="scrollable-content">
      <div class="section">
        <h3>Ingredients</h3>
        <ul>
          <li v-for="(step, index) in this.recipe.ingredients.split(',')" :key="index">{{ step }}</li>
        </ul>
      </div>
      <div class="section">
        <h3>Instructions</h3>
        <ol>
          <li v-for="(step, index) in this.recipe.instructions.split('\n')" :key="index">{{ step }}</li>
        </ol>
      </div>
    </div>
    <div class="footer">
      <p><strong>Preparation Time:</strong> {{ this.recipe.preparation_time }} minutes</p>
      <p><strong>Servings:</strong> {{ this.recipe.servings }}</p>
      <p><strong>Kcal:</strong> {{ this.recipe.kcal }}</p>
      <p><strong>Recipe Type:</strong> {{ this.recipe.recipe_type }}</p>
      <p><strong>Allergens:</strong> {{ this.recipe.allergens }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recipe: Object,
  },
  created() {
    console.log(this.recipe);
  },
  methods: {
  }
};
</script>

<style scoped>
.recipe-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  color: #333;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 16px auto;
  margin-left: 0;
  font-family: Arial, sans-serif;
  max-width: 250px;
}

.header {
  background-color: #87e8e0;
  color: #fff;
  padding: 10px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.header h2 {
  margin: 0;
  font-size: 1.5rem;
}

.scrollable-content {
  max-height: 300px;
  padding: 10px;
  overflow-y: auto;
}

.section {
  margin-bottom: 20px;
}

.section h3 {
  font-size: 1.2rem;
  margin: 0;
}

.footer {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer p {
  margin: 0;
}

.footer p strong {
  font-weight: bold;
}

.footer p:last-child {
  margin-top: 20px;
}

</style>
