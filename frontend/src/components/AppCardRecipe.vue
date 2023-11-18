<template>
    <div class="recipe-card">
        <div v-if="logged">
            <div @click="togglePopup" class="recipe-title">
                <span v-if="type === 'rate'">
                  <h2>{{ this.recipe.title }}</h2><h3>{{ 'Rating: ' + this.CurrRating }}</h3>
                </span>
                <span v-if="type === 'recent'">
                  <h2>{{ this.recipe.title }}</h2><h3>{{ this.recipe.creation_date }}</h3>
                </span>
                <span v-if="type === 'recipe_type'">
                  <h2>{{ this.recipe.title }}</h2><h3>{{ this.recipe.recipe_type }}</h3>
                </span>
            </div>
            <div v-if="showPopup" class="popup">
                <div class="popup-content">
                    <div class="scrollable-content">
                        <div class="recipe-header">
                            <div class="recipe-card-title">
                                <h2>{{ "Title: " + this.recipe.title }}</h2>
                                <p><strong>Creation Date:</strong> {{ this.recipe.creation_date }}</p>
                            </div>
                            <div class="recipe-card-rating">
                                <div class="recipe-card-rating-title">
                                    <h3>Current Rating</h3>
                                    <p>{{ this.CurrRating + " from " + this.NumRatings + " ratings" }}</p>
                                </div>
                                <div class="rating-stars">
                                <span v-if="username !== this.recipe.username_id">
                                    <h3>Add your rating:</h3>
                                </span>
                                    <span
                                            v-for="star in [1, 2, 3, 4, 5]"
                                            :key="star"
                                            @click="setRating(star)"
                                            @mouseover="hoverStars(star)"
                                            @mouseout="resetStars"
                                            :class="{ 'filled': star <= rating, 'hovered': star <= hoveredStar, 'hidden-stars': username === this.recipe.username_id }"
                                    >
                                    ★
                                </span>
                                </div>
                            </div>
                        </div>
                        <div class="section">
                            <div class="recipe-card-section">
                                <h3>Ingredients</h3>
                                <ul>
                                    <li v-for="(step, index) in this.parseText(this.recipe.ingredients)" :key="index">
                                        {{ step }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="section">
                            <div class="recipe-card-section">
                                <h3>Instructions</h3>
                                <ol>
                                    <li v-for="(step, index) in this.recipe.instructions.split('\n')" :key="index">
                                        {{ step }}
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div class="section">
                            <div class="recipe-card-section">
                                <h3>Allergens</h3>
                                <ul>
                                    <li v-for="(step, index) in this.parseText(this.recipe.allergens)" :key="index">
                                        {{ step }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="section">
                            <div class="recipe-card-section">
                                <h3>Type</h3> {{ this.recipe.recipe_type }}
                            </div>
                        </div>
                        <div class="section">
                            <div class="recipe-card-section">
                                <h3>Preparation time</h3> {{ this.recipe.preparation_time }}
                            </div>
                        </div>
                        <div class="section">
                            <div class="recipe-card-section">
                                <h3>Servings</h3> {{ this.recipe.servings }}
                            </div>
                        </div>
                        <button class="submit-button" @click="togglePopup">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div @click="goToLogin" class="recipe-title">
                <span v-if="type === 'rate'">
                  <h2>{{ this.recipe.title }}</h2><h3>{{ 'Rating: ' + this.CurrRating }}</h3>
                </span>
                <span v-if="type === 'recent'">
                  <h2>{{ this.recipe.title }}</h2><h3>{{ this.recipe.creation_date }}</h3>
                </span>
                <span v-if="type === 'recipe_type'">
                  <h2>{{ this.recipe.title }}</h2><h3>{{ this.recipe.recipe_type }}</h3>
                </span>
            </div>
        </div>

    </div>
</template>


<script>

import axios from 'axios';
import '../assets/styles/appStyles.css';

export default {
    props: {
        recipe: Object,
        username: String,
        logged: Boolean,
        type: String,
        recipeName: String,
    },
    data() {
        return {
            showPopup: false,
            rating: 0, // Valoración inicial
            NumRatings: this.recipe.rating_amount,
            CurrRating: this.recipe.rating_average,
            recipe_id: this.recipe.id,
            hoveredStar: 0,
        };
    },
    methods: {
        togglePopup() {
            this.showPopup = !this.showPopup;
        },
        goToLogin() {
            alert('Log in to see the recipe!');
            this.$router.push('/login');
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
        hoverStars(star) {
            this.hoveredStar = star;
        },
        resetStars() {
            this.hoveredStar = 0;
        },
        getRating() {
            // Axios para recibir los ratings
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
    flex: 0 0 auto;
    width: 100%;
    max-width: calc(12.5% - 1.7%);
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
    margin-bottom: 10px; /* Añadido margen inferior */
    height: 88%;
}

.recipe-title:hover {
    background-color: #ff5733;
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
    background-color: #FCE4A4;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-height: 500px;
    padding: 20px;
    overflow-y: auto;
    margin-top: 100px;
}

.section h2 {
    font-size: 1.5rem;
}

.section h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: #d44d31; /* Color personalizado para los títulos de sección */
}

.section {
    color: black;
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

.rating-stars span.hovered {
    color: #ffcc00;
}

.hidden-stars {
    display: none;
}

.recipe-header {
    background-color: #FF5733;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px; /* Añadido margen inferior */
}

.recipe-card-title {
    border-radius: 5px;
    width: 60%;
    padding: 10px;
    border: 2px solid #d44d31;
    margin: 5px;
}

.recipe-card-section {
    border-radius: 5px;
    padding: 10px;
    border: 2px solid #d44d31;
    margin: 5px;
}

.recipe-card-rating {
    border: 2px solid #d44d31;
    border-radius: 5px;
    padding: 10px;
}

h3 {
    display: block;
    font-size: 20px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    color: white;
}

hr {
    border-top: 1px solid #df8500;
    border-bottom: 1px solid #ffbf00;
    margin-left: 2%;
    margin-right: 2%;
}

</style>