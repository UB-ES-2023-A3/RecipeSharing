<template>
    <div v-if="logged">
        <div @click="togglePopup" class="recipe-title">
            <h2>{{ this.recipe.title }}</h2>
        </div>
    </div>
    <div v-else>
        <div @click="goToLogin" class="recipe-title">
            <h2>{{ this.recipe.title }}</h2>
        </div>
    </div>
    <div v-if="showPopup" class="popup">
        <div class="popup-content">
            <div class="scrollable-content">
                <div class="section">
                    <h2>{{ "Title: " + this.recipe.title }}</h2>
                    <p><strong>Creation Date:</strong> {{ this.recipe.creation_date }}</p>
                </div>
                <div class="section">
                    <h3>Current Rating</h3>
                    <p>{{ this.CurrRating + " from " + this.NumRatings + " ratings" }}</p>
                </div>
                <div class="section">
                    <div class="rating-stars">
              <span
                      v-for="star in [1, 2, 3, 4, 5]"
                      :key="star"
                      @click="setRating(star)"
                      :class="{ 'filled': star <= rating }"
              >
                ★
              </span>
                    </div>
                </div>
                <div class="section">
                    <h3>Ingredients</h3>
                    <ul>
                        <li v-for="(step, index) in this.parseText(this.recipe.ingredients)" :key="index">{{
                            step
                            }}
                        </li>
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
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    props: {
        recipe: Object,
        username: String,
        logged: Boolean,
    },
    data() {
        return {
            showPopup: false,
            rating: 0, // Valoración inicial
            NumRatings: this.recipe.rating_amount,
            CurrRating: this.recipe.rating_average,
            recipe_id: this.recipe.id,
        };
    },
    methods: {
        togglePopup() {
            this.showPopup = !this.showPopup;
        },
        parseText(listString) {
            const sinCorchetes = listString.replace(/\[|\]/g, '');
            const sinComillasSimples = sinCorchetes.replace(/'/g, '');
            const arrayIngredientes = sinComillasSimples.split(',');
            return arrayIngredientes;
        },
        setRating(rating) {
            this.rating = rating;
            this.addRating();
            this.getRating();

        },
        getRating() {
            // Axios para recibir los ratings
            axios
            axios.get(`recipes/getratings/${this.recipe_id}/`)
                .then((response) => {
                    if (response.status === 200) {
                        const ratings = response.data;
                        this.NumRatings = ratings.rating_amount;
                        this.CurrRating = ratings.rating_average;
                        console.log(response.data.recipes)
                    }
                })
                .catch((error) => {
                    console.error("Error al obtener los ratings:", error);
                });
        },

        addRating() {
            //axios para postear el rating de una receta
            axios
                .post("recipes/postratings/", {
                    user_id: this.username,
                    recipe_id: this.recipe.id,
                    rating: this.rating
                })
                .then((response) => {
                    if (response.status === 200) {
                        console.log("Rating added");
                        alert("Rating added.");
                        this.getRating();
                    }
                })
                .catch((error) => {
                    alert(error.response);
                });
        }
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
  max-width: 600px;
  max-height: 500px;
  padding: 20px;
  overflow-y: auto;
}

.rating-stars {
  text-align: right;
  margin-bottom: 10px;
}

.rating-stars span {
  font-size: 1.5rem;
  cursor: pointer;
  color: #ccc;
  margin-left: 5px;
}

.rating-stars span.filled {
  color: #ffcc00;
}
</style>