<template>
    <div class="recipeMainContainer">
        <div class="recipeContainer">
            <div class="recipeTitleImageFavRatingContainer">
                <div class="recipeLeftContainer">
                    <div class="recipeTitleContainer">
                        {{ this.recipe.title }}
                    </div>
                    <!--                    <div class="recipeHorizontalLineContainer">-->
                    <!--                        <hr class="recipeHorizontalLine">-->
                    <!--                    </div>-->
                    <div class="recipeImageContainer">

                    </div>
                </div>
                <div class="recipeRightContainer">
                    <div class="recipeRatingFavContainer">
                        <div class="recipeRatingContainer">
                            <div class="recipeRatingStars">
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
                                <p>{{ this.recipe.rating_average + "(" + this.recipe.rating_amount + ")" }}</p>
                            </div>
                        </div>
                        <div class="recipeFavContainer">
                            <button @click="addToFavorites" :class="{ 'active': isFavorited }" class="heart-btn">
                                <i class="far fa-heart heart-icon" v-if="!isFavorited"></i>
                                <i class="fas fa-heart heart-icon active-heart" v-if="isFavorited"></i>
                            </button>
                        </div>
                    </div>
                    <div class="recipeIngredientsContainer">
                        <h3>Ingredients</h3>
                        <ul>
                            <li v-for="(step, index) in this.parseText(this.recipe.ingredients)" :key="index">
                                {{ step }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="recipeInstructionsContainer">
                <h3>Instructions</h3>
                <ol>
                    <li v-for="(step, index) in this.recipe.instructions.split('\n')" :key="index">
                        {{ step }}
                    </li>
                </ol>
            </div>
            <div class="recipeAllergensTypesContainer">
                <div class="recipeAllergensContainer">
                    <h3>Allergens</h3>
                    <ul>
                        <li v-for="(step, index) in this.parseText(this.recipe.allergens)" :key="index">
                            {{ step }}
                        </li>
                    </ul>
                </div>
                <div class="recipeTypesContainer">
                    <h3>Types</h3>
                    <ul>
                        <li v-for="(step, index) in this.parseText(this.recipe.recipe_type)" :key="index">
                            {{ step }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="recipePrepTimeServingsContainer">
                <div class="recipePrepTimeContainer">
                    <h3>Preparation time</h3> {{ this.recipe.preparation_time }}
                </div>
                <div class="recipeServingsContainer">
                    <h3>Servings</h3> {{ this.recipe.servings }}
                </div>
            </div>
            <div class="recipeCommentsSectionContainer">
                <div class="recipeCommentsContainer">
                    <div class="recipeCommentTitleContainer">
                        <h3>COMMENTS</h3>
                    </div>
                    <div class="recipeCommentList scrollable-content">
                        <div v-for="(comment, index) in this.recipe.comments_list" :key="index"
                             class="recipeCommentContainer">
                            <div class="recipeCommentInfoContainer">
                                <div class="recipeCommentInfoUsernameContainer">
                                    <p><strong>Username:</strong> {{ comment.username }}</p>
                                </div>
                                <div class="recipeCommentInfoDateContainer">
                                    <p><strong>Date:</strong> {{ comment.date }}</p>
                                </div>
                            </div>
                            <div class="recipeCommentContentContainer">
                                <p>{{ comment.review }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="recipeAddCommentContainer">
                        <div class="recipeCommentTextFieldContainer">
                            <label class="label" for="commentInput">Add a comment:</label>
                            <textarea
                                    v-model="newComment"
                                    id="commentInput"
                                    placeholder="Write your comment"
                                    class="textarea"
                            ></textarea>
                        </div>
                    </div>
                    <button @click="addComment" class="submit-button">Add comment</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: "RecipePageRework",
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

            newComment: '',
            comments_updated: this.comments
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
        },
        createDate() {
            // Crear el objeto comment con la fecha actual y otros datos
            const currentDate = new Date();
            const day = currentDate.getDate().toString().padStart(2, '0');
            const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
            const year = currentDate.getFullYear().toString();
            const hours = currentDate.getHours().toString().padStart(2, '0');
            const minutes = currentDate.getMinutes().toString().padStart(2, '0');

            const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;
            return formattedDate;
        },
        addComment() {

            if (this.checkComment()) {
                alert("No comment written")
                return
            }
            const comment = {
                username: this.username,
                review: this.newComment,
                date: this.createDate(),
            };

            axios
                .post("postRatings/", {
                    user_id: this.username,
                    recipe_id: this.recipeId,
                    comment: comment,
                    review_type: "comment",
                })
                .then((response) => {
                    if (response.status === 200) {
                        console.log("Rating added");
                        alert("Review added.");
                        this.newComment = ''
                        this.comments_updated = response.data.comments_list
                        this.getRecipeInformation()
                    }
                })
                .catch((error) => {
                    alert(error.response);
                });
        },
        checkComment() {
            return this.newComment == '';
        },
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
    background-color: rgb(199, 235, 243);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.recipeContainer {
    height: 100%;
    padding-top: 3vh;
    width: 50%;
    margin: auto;
}

.recipeTitleImageFavRatingContainer {
    border: 2px solid rgb(0, 162, 232);
    display: flex;
    width: 100%;
    min-height: 40%;
}

.recipeLeftContainer {
    width: 50%;
    padding: 1vh;
}

.recipeTitleContainer {
    height: 20%;
    width: 100%;
    font-family: fantasy;
    font-size: x-large;
}

.recipeImageContainer {
    height: 80%;
    width: 90%;
    background-image: url('../assets/images/loginRegisterBG.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.recipeRightContainer {
    width: 50%;
    padding: 1vh;
}

.recipeRatingFavContainer {
    width: 100%;
    display: flex;
    justify-content: space-between; /* Espaciado entre elementos */
    align-items: center; /* Alineación vertical al centro */
}

.recipeRatingContainer {
    display: flex;
    align-items: center; /* Alineación vertical al centro */
    width: 80%;
}

.recipeRatingStars {
    width: 100%;
    height: 100%;
    margin-top: -5%;
    display: contents;
    /* Asegúrate de que este contenedor sea flexible para alinear horizontalmente */
    display: flex;
    justify-content: flex-start; /* Alineación horizontal al inicio */
}

.recipeRatingStars p {
margin-left: 2%;
    width: 100%;
}

.recipeRatingStars span {
    font-size: xx-large;
    cursor: pointer;
    color: #ccc;
}

.recipeRatingStars span.filled {
    color: #ffcc00;
}

.recipeRatingStars span.hovered {
    color: #ffcc00;
}

.hidden-stars {
    display: none;
}

.recipeRatingRate {
    width: 20%;
    height: 20%;
}

.recipeFavContainer {
    width: 20%;
    height: 100%;
    text-align: end;
}

.heart-btn {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
}

.heart-icon {
    font-size: 30px;
    color: #FFFFFF;
    transition: color 0.3s ease;
}

.active-heart {
    /* Estilos para el corazón relleno */
    color: #ff0000; /* Color del corazón relleno */
}

.recipeIngredientsContainer {
    height: 70%;
    width: 100%;
}

.recipeInstructionsContainer {
    width: 100%;
    border: 2px solid rgb(127 198 229);
    margin-top: 1%;
}

.recipeAllergensTypesContainer {
    width: 100%;
    border: 2px solid rgb(127 198 229);
    margin-top: 1%;
    display: flex;
}

.recipeAllergensContainer {
    width: 50%;
    padding: 1vh;
}

.recipeTypesContainer {
    width: 50%;
    padding: 1vh;
}

.recipePrepTimeServingsContainer {
    width: 100%;
    border: 2px solid rgb(127 198 229);
    margin-top: 1%;
    display: flex;
}

.recipePrepTimeContainer {
    width: 50%;
    padding: 1vh;
}

.recipeServingsContainer {
    width: 50%;
    padding: 1vh;
}

.recipeCommentsSectionContainer {
    width: 100%;
    border: 2px solid rgb(127 198 229);
    margin-top: 1%;
    text-align: center;
}

.recipeCommentsContainer {
    width: 75%;
    margin: 20px auto;
}

.recipeCommentTitleContainer {
    text-align: center;
    margin-bottom: 3vh;
    color: #314cd4;
    border-bottom: 2px solid #3139d4;
}

.label {
    display: block; /* Hace que la etiqueta sea un bloque, lo que permite centrar el texto */
    text-align: center;
    color: #317dd4;
}

.recipeCommentList {
    margin-bottom: 2vh;
}

.scrollable-content {
    max-height: 20vh;
    overflow-y: auto;
    padding: 1vh;
    border: 2px solid #319bd4;
    border-radius: 10px;
    background-color: #fff;
}

.recipeAddCommentContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.recipeCommentTextFieldContainer {
    text-align: center;
    justify-content: center;
    margin-bottom: 1vh;
    width: 100%;
}

.textarea {
    margin-bottom: 1vh;
    padding: 0.5vh;
    border: 1px solid #31a3d4;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
    resize: vertical;
    min-height: 5vh; /* Medida inicial del cuadro de comentarios */
}

.submit-button {
    background-color: #0e819a;
    color: white;
    padding: 8px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.submit-button:hover {
    background-color: #314cd4;
}

.recipeCommentContainer {
    margin-bottom: 2vh;
    border: 2px solid #31cfd4;
    border-radius: 10px;
    padding: 1vh;
    background-color: #fff;
    text-align: justify;
}

.recipeCommentInfoContainer {
    margin-bottom: 1vh;
    display: flex;
}

.recipeCommentInfoUsernameContainer {
    width: 50%;
}

.recipeCommentInfoDateContainer {
    width: 50%;
    text-align: end;
}

.recipeCommentContentContainer {
    /* Estilos adicionales para la sección de revisión */
    color: #333; /* Cambia el color del texto según tus preferencias */
}

@media screen and (max-width: 768px) {
    .recipeContainer {
        width: 80%;
    }

    .recipeLeftContainer,
    .recipeRightContainer {
        width: 100%;
    }

    .recipeTitleContainer {
        font-size: large;
    }

}

/* Para pantallas aún más pequeñas */
@media screen and (max-width: 480px) {
    .recipeContainer {
        width: 90%;
    }

    .recipeTitleContainer {
        font-size: medium;
    }
}

</style>
