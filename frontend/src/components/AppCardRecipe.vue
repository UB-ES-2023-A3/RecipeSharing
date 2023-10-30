<template>
  <div class="recipe-card">
    <div @click="togglePopup" class="recipe-title">
      <h2>{{ this.recipe.title }}</h2>
    </div>
    <div v-if="showPopup" class="popup">
      <div class="popup-content">
        <div class="scrollable-content">
          <div class="section">
            <h2>{{ this.recipe.title }}</h2>
            <p><strong>Creation Date:</strong> {{ this.recipe.creation_date }}</p>
          </div>
          <div class="section">
            <h3>Ingredients</h3>
            <ul>
              <li v-for="(step, index) in this.parseText(this.recipe.ingredients)" :key="index">{{ step }}</li>
            </ul>
          </div>
          <div class="section">
            <h3>Instructions</h3>
            <ol>
              <li v-for="(step, index) in this.recipe.instructions.split('\n')" :key="index">{{ step }}</li>
            </ol>
          </div>
          <div class="section">
            <h3>Allergens</h3>
            <ul>
              <li v-for="(step, index) in this.parseText(this.recipe.allergens)" :key="index">{{ step }}</li>
            </ul>
          </div>
          <div class="section">
            <h3>Type</h3> {{ this.recipe.recipe_type }}
          </div>
          <div class="section">
            <h3>Preparation time</h3> {{ this.recipe.preparation_time }}
          </div>
          <div class="section">
            <h3>Servings</h3> {{ this.recipe.servings }}
          </div>
        </div>
        <button @click="togglePopup">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recipe: Object,
  },
  data() {
    return {
      showPopup: false,
    };
  },
  methods: {
    togglePopup() {
      this.showPopup = !this.showPopup;
    },
    parseText(listString) {
      // Elimina los corchetes [ y ]
      const sinCorchetes = listString.replace(/\[|\]/g, '');

      // Elimina las comillas simples '
      const sinComillasSimples = sinCorchetes.replace(/'/g, '');

      // Divide la cadena en un array utilizando la coma como separador
      const arrayIngredientes = sinComillasSimples.split(',');

      return arrayIngredientes;
    },
  },
};
</script>

<style scoped>
.recipe-card {
  cursor: pointer;
  text-align: center;
}

.recipe-title {
  cursor: pointer;
  text-align: center;
  border-radius: 4px;
  background-color: #a51d1de7;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 250px;
  padding: 10px;
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: #625e5a;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px; /* Ancho más grande */
  max-height: 500px; /* Alto más grande */
  padding: 20px;
  overflow-y: auto;
}

.section h2 {
  font-size: 1.5rem; /* Tamaño de título más grande */
}

.section h3 {
  font-size: 1.2rem;
}

/* Resto de estilos */
</style>
