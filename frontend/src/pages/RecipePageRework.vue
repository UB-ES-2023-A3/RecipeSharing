<template>
    <div class="recipeMainContainer" v-if="this.recipe">
        <div class="recipeInfoContainer">
            <div class="recipeLeftContainer">
                <div class="recipeImageContainer">

                </div>
                <div class="recipeUsernameCreationDateContainer">
                    <div class="recipeUsernameContainer">
                        <p>@{{ this.recipe.username_id }}</p>
                    </div>
                    <div class="recipeCreationDateContainer">
                        <p>Created: {{ this.recipe.creation_date }}</p>
                    </div>
                </div>
                <div class="recipeHRLeftUsernameRating">
                    <hr>
                </div>
                <div class="recipeRatingFavoriteContainer">
                    <div class="recipeRatingContainer">
                        <div class="recipeRatingTitleContainer">
                            <p>Current Rating:
                                {{ this.recipe.rating_average + " from " + this.recipe.rating_amount + " ratings" }}</p>
                        </div>
                        <div class="recipeRatingStarsContainer">
                            <div v-if="this.username !== this.recipe.username_id">
                                <p>Add your rating:</p>
                            </div>
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
                    <div class="recipeFavoriteContainer">
                        <button @click="addToFavorites" :class="{ 'active': isFavorited }" class="heart-btn">
                            <i class="far fa-heart heart-icon" v-if="!isFavorited"></i>
                            <i class="fas fa-heart heart-icon active-heart" v-if="isFavorited"></i>
                        </button>
                    </div>
                </div>
                <div class="recipeHRLeftUsernameRating">
                    <hr>
                </div>
                <div class="recipeTypeContainer">
                    <div v-for="(step, index) in this.parseText(this.recipe.recipe_type)" :key="index"
                         class="recipeType">
                        #{{ step }}
                    </div>
                </div>
                <div class="recipeHRLeftUsernameRating">
                    <hr>
                </div>
                <div class="recipeAllergensContainer">
                    <p>Allergens:</p>
                    <div v-for="(step, index) in this.parseText(this.recipe.allergens)" :key="index"
                         class="recipeAllergens">
                        <li>{{ step }}</li>
                    </div>
                </div>
            </div>
            <div class="recipeRightContainer">
                <div class="recipeTitleContainer">
                    <h1>{{ this.recipe.title }}</h1>
                </div>
                <div class="recipeServingsPrepTimeContainer">
                    <div class="recipeServingsContainer">
                        <p>Servings: {{ this.recipe.servings }}</p>
                    </div>
                    <div class="recipePrepTimeContainer">
                        <p>Preparation Time: {{ this.recipe.preparation_time }}</p>
                    </div>
                </div>
                <div class="recipeHRLeftUsernameRating">
                    <hr>
                </div>
                <div class="recipeIngredientsContainer">
                    <h2>Ingredients:</h2>
                    <p v-for="(ingredient, index) in this.parseText(this.recipe.ingredients)" :key="index"
                       class="ingredientCheckbox">
                        <input type="checkbox" :value="ingredient">
                        {{ ingredient }}
                    </p>
                </div>
                <div class="recipeHRLeftUsernameRating">
                    <hr>
                </div>
                <div class="recipeInstructionsContainer">
                    <h2>Instructions:</h2>
                    <ol>
                        <li v-for="(step, index) in this.recipe.instructions.split('\n')" :key="index">
                            {{ step }}
                        </li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="recipeCommentsContainer">
            <AppComments :username="this.username" :recipe_id="this.recipeId" :comments="this.recipe.comments_list">
            </AppComments>
        </div>
    </div>
</template>

<script>

import axios from 'axios';
import AppComments from "@/components/AppComments.vue";


export default {
    name: "RecipePageRework",
    components: {AppComments},
    data() {
        return {
            showPopup: false,
            rating: 0, // Valoración inicial
            NumRatings: 0,
            CurrRating: 0,
            hoveredStar: 0,
            username: null,
            recipe: null,
            profileInfo: null,
            isFavorited: false,
            recipeId: 0,

        };
    },
    methods: {
        closeRecipe() {
            this.$router.push('/');
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
            axios.get(`getRatings/`)
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
                .post("postRatings/", {
                    user_id: this.username,
                    recipe_id: this.recipe.id,
                    rating: this.rating,
                    review_type: "rate"
                })
                .then((response) => {
                    if (response.status === 200) {
                        console.log("Rating added");
                        alert("Rating added.");
                        this.getRecipeInformation();
                    }
                })
                .catch((error) => {
                    alert(error.response);
                });
        },
        getRecipeInformation() {
            // Axios para recibir las recetas
            axios
                .get(`/recipe/${this.recipeId}/`)
                .then((response) => {
                    if (response.status === 200) {
                        this.recipe = response.data.recipe;
                    }
                })
                .catch((error) => {
                    console.error("Error al obtener la información de la receta:", error);
                });
        },
        addToFavorites() {
            // Lógica para agregar o quitar de favoritos
            this.isFavorited = !this.isFavorited;
            axios
                .post("/recipes/postFavorites/", {
                    user_id: this.username,
                    recipe_id: this.recipe.id,
                })
                .then((response) => {
                    if (response.status === 200) {
                        console.log("Recipe updated");
                        console.log(response)
                        this.isFavorited = this.recipeId in this.profileInfo.list_favorite_recipes
                        this.getUserInformation();
                        this.getRecipeInformation();
                        alert("List of favorites updated")
                    }
                })
                .catch((error) => {
                    alert(error.response);
                });
        },
        getUserInformation() {
            // Axios para recibir lla información del usuario
            axios
                .get(`/user/${this.username}/`)
                .then((response) => {
                    if (response.status === 200) {
                        const info = response.data.user;
                        this.profileInfo = info;
                        console.log(response.data.user)
                        this.checkFavorite()
                    }
                })
                .catch((error) => {
                    console.error("Error al obtener las información del usuario:", error);
                });
        },
        checkFavorite() {
            this.isFavorited = this.recipeId in this.profileInfo.list_favorite_recipes
        }

    },
    async created() {
        this.recipeId = this.$route.params.id;
        this.getRecipeInformation();
        this.username = localStorage.getItem('username');
        this.getUserInformation();
    }
}
</script>

<style scoped>

.recipeMainContainer {
    height: 100%;
    width: 100%;
}

.recipeInfoContainer {
    margin-top: 3vh;
    margin-left: 10vh;
    margin-right: 10vh;
    display: flex;
}

.recipeLeftContainer {
    height: 100%;
    width: 50%;
}

.recipeImageContainer {
    width: 70%;
    height: 30vh;
    background-image: url('../assets/images/loginRegisterBG.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.recipeUsernameCreationDateContainer {
    display: flex;
    width: 70%;
}

.recipeUsernameContainer {
    width: 50%;
}

.recipeCreationDateContainer {
    width: 50%;
    text-align: end;
}

.recipeHRLeftUsernameRating {
    width: 70%
}

.recipeRatingFavoriteContainer {
    width: 70%;
    text-align: center;
    display: flex;
}

.recipeRatingContainer {
    width: 50%;
}

.recipeRatingStarsContainer span {
    font-size: 1.5rem;
    color: #ccc;
    margin-left: 5px;
}

.recipeRatingStarsContainer span.filled {
    cursor: pointer;
    color: #ffcc00;
}

.recipeRatingStarsContainer span.hovered {
    cursor: pointer;
    color: #ffcc00;
}


.hidden-stars {
    display: none;
}

.recipeFavoriteContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
}

.heart-btn {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
}

.heart-icon {
    font-size: 50px;
    color: #FFFFFF;
    transition: color 0.3s ease;
}

.active-heart {
    /* Estilos para el corazón relleno */
    color: #ff0000; /* Color del corazón relleno */
}

.recipeRightContainer {
    height: 100%;
    width: 50%;
}

.recipeServingsPrepTimeContainer {
    display: flex;
    width: 70%;
}

.recipeServingsContainer {
    width: 50%;
}

.recipePrepTimeContainer {
    width: 50%;
    text-align: end;
}

.scrollable-content {
    max-height: 400px; /* Ajusta la altura máxima según tus necesidades */
    overflow-y: auto; /* Agrega una barra de desplazamiento vertical si es necesario */
    padding: 10px; /* Añade un relleno interno para separar el contenido del borde */
    border: 2px solid #d44d31; /* Agrega un borde alrededor del contenido */
    border-radius: 10px; /* Ajusta la curvatura de las esquinas */
    background-color: #fff; /* Cambia el color de fondo según tus preferencias */
}

.recipe-title:hover {
    background-color: #ff5733;
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
    width: 75%;
}


.recipe-header {
    background-color: #FF5733;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px; /* Añadido margen inferior */
    width: 75%;
}

.recipe-card-title {
    border-radius: 5px;
    width: 60%;
    padding: 10px;
    border: 2px solid #d44d31;
    margin: 5px;
    width: 100%;

}

.recipe-card-section {
    border-radius: 5px;
    padding: 10px;
    border: 2px solid #d44d31;
    margin: 5px;
    width: 100%;
}

.recipe-card-rating {
    border: 2px solid #d44d31;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
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

.favorited {
    background-color: #ffcc00; /* Cambia el color de fondo cuando está marcado como favorito */
    color: #333; /* Cambia el color del texto cuando está marcado como favorito */
}


</style>
