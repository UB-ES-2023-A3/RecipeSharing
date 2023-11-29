<template>
    <div class="recipeMainContainer">
        <div class="recipeContainer">
            <div class="recipeTitleImageRatingFavContainer">
                <div class="recipeImageContainer">
                    <p>{{ this.recipe.title }}</p>
                </div>
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
            </div>
            <div class="recipeInfoContainer">
                <div class="recipeInfoLeftContainer">
                    <div class="recipeIngredientsContainer">
                        <h3>Ingredients</h3>
                        <ul>
                            <li v-for="(step, index) in this.parseText(this.recipe.ingredients)" :key="index">
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
                    <div class="recipePrepTimeContainer">
                        <h3>Preparation time</h3> {{ this.recipe.preparation_time }}
                    </div>
                    <div class="recipeServingsContainer">
                        <h3>Servings</h3> {{ this.recipe.servings }}
                    </div>
                </div>
                <div class="recipeInfoRightContainer">
                    <div class="recipeInstructionsContainer">
                        <h3>Instructions</h3>
                        <ol>
                            <li v-for="(step, index) in this.recipe.instructions.split('\n')" :key="index">
                                {{ step }}
                            </li>
                        </ol>
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
    display: flex;
}

.recipeContainer {
    width: 50%;
    background-color: antiquewhite;
    border-radius: 2%;
    border: 2px solid gray;
    margin: 2% auto auto;
}

.recipeTitleImageRatingFavContainer {
    display: flex;
    justify-content: space-between;
}

.recipeLeftContainer {
    width: 50%;
    padding: 1vh;
}

.recipeTitleContainer {
    width: 30%;
}

.recipeImageContainer {
    background-image: url(http://localhost:8080/img/loginRegisterBG.8d961785.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    text-align: end;
    width: 50%;
    aspect-ratio: 1/1; /* Establece una relación de aspecto 1:1 para hacer que la imagen sea un cuadrado */
    border-radius: 50%; /* Esto asegurará que el cuadrado sea una forma circular */
    overflow: hidden; /* Para asegurarse de que la imagen se ajuste al contenedor circular */
    margin: 2%;
    height: auto; /* Ajusta la altura automáticamente */
    display: block;
}

.recipeImageContainer p {
    background-color: white;
    text-align: center;
    padding: 5%;
    margin-top: 65%;
    margin-left: 50%;
    font-size: x-large;
    font-family: 'FontAwesome';
}

.recipeRightContainer {
    width: 50%;
    padding: 1vh;
}

.recipeRatingFavContainer {
    width: 50%;
    display: flex;
    margin-top: 2%;
    height: fit-content;
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
    height: 100%;
    padding: 3%;
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
    background-color: rgb(199, 235, 243);
}

.recipeAllergensTypesContainer {
    width: 100%;
    border: 2px solid rgb(127 198 229);
    margin-top: 1%;
    display: flex;
    background-color: rgb(199, 235, 243);
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
    background-color: rgb(199, 235, 243);
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
    background-color: rgb(199, 235, 243);
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
