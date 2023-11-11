<template>
  <div class="mainContainer">
    <div class="secondaryContainer">
      <div class="titleContainerHP">
        <div class="mainTitleHP">
          <h1> Most Recent Recipes </h1>
        </div>
      </div>
      <AppCardCarousel
        :type="recent"
        :recipes="recipesByRate"
        :visibleRecipes="8"
        :logged="logged"
        :username="username"
        v-if="recipesByRate.length > 0"
      ></AppCardCarousel>
    </div>
    <div class="secondaryContainer">
      <div class="titleContainerHP">
        <div class="mainTitleHP">
          <h1> Most Liked Recipes </h1>
        </div>
      </div>
      <AppCardCarousel
        :type="rate"
        :recipes="recipesByRate"
        :visibleRecipes="8"
        :logged="logged"
        :username="username"
        v-if="recipesByRate.length > 0"
      ></AppCardCarousel>
    </div>
    <div v-if="logged" class="floating-button" @click="redirectToRecipePage">
      <i class="fas fa-plus"></i>
      <span class="text">Upload new recipe</span>
    </div>
  </div>
</template>

<script>
import '../assets/styles/appStyles.css'
import axios from 'axios'
import AppCardCarousel from '@/components/AppCardCarousel.vue'

export default {
  name: 'HomePage.vue',

  components: { AppCardCarousel },
  props: {
    logged: Boolean,
    username: String,
    email: String,
    password: String
  },
  data () {
    return {
      recipesByDate: [],
      recipesByRate: [],
      rate: 'rate',
      recent: 'recent'
    }
  },
  methods: {
    redirectToRecipePage () {
      this.$router.push('/addRecipe')
    },
    async getRecipesByRate () {
      try {
        const response = await axios.get('http://localhost:8000/recipes/')
        if (response.status === 200) {
          this.recipesByRate = response.data
        }
      } catch (error) {
        console.error('Error al obtener las recetas:', error)
      }
    },
    async getRecipesByRecent () {
      try {
        const response = await axios.get('http://localhost:8000/recipes/')
        if (response.status === 200) {
          const recipes = response.data.recipes
          this.recipesByDate = recipes
        }
      } catch (error) {
        console.error('Error al obtener las recetas:', error)
      }
    }
  },
  async created () {
    await this.getRecipesByRate()
    await this.getRecipesByRecent()
  }
}
</script>

<style scoped>

.floating-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #ff5733;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
}

.floating-button i {
  font-size: 24px;
}

.floating-button .text {
  display: none;
  opacity: 0;
  font-size: 14px;
  margin-left: 10px;
  transition: opacity 0.3s, font-size 0.3s;
}

.floating-button:hover {
  width: 150px;
  border-radius: 5px; /* Cambiar el borde para que sea más rectangular */
}

.floating-button:hover i {
  display: none;
  font-size: 0;
}

.floating-button:hover .text {
  display: inline;
  opacity: 1;
  font-size: 14px;
  margin-left: 10px;
  transition: opacity 0.3s, font-size 0.3s;
}
</style>
