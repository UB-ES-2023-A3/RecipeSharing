<template>
  <div class="card-carousel">
    <div class="carousel-container" :style="containerStyle">
      <div
        class="carousel-item"
        v-for="(recipe, index) in recipes"
        :key="index"
      >
        <AppCardRecipe :recipe="recipe"></AppCardRecipe>
      </div>
    </div>
    <button @click="expandCarousel" v-if="recipes.length > visibleRecipes">
      Ver Más
    </button>
  </div>
</template>

<script>
import AppCardRecipe from '@/components/AppCardRecipe.vue';
export default {
  components: {AppCardRecipe},
  props: {
    recipes: Array,
    visibleRecipes: Number,
  },
  data() {
    return {
      expanded: false,
    };
  },
  computed: {
    containerStyle() {
      return {
        height: this.expanded ? "auto" : "250px", // Altura fija en píxeles cuando no está expandido
      };
    },
  },
  methods: {
    expandCarousel() {
      this.expanded = !this.expanded;
    },
  },
};
</script>

<style scoped>
.card-carousel {
  text-align: center;
}

.carousel-container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 20px; /* Espacio entre las tarjetas */
  padding: 40px;
  border-radius: 4px;
  height: auto; /* Altura variable */
  width: 75%;
  margin: 0 auto; /* Centra horizontalmente */
  margin-top: 15px;
  max-width: 75%;
}

.carousel-item {
  flex: 0 0 auto;
}

button {
  margin-top: 10px;
  background-color: #ff5733;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
}
</style>
