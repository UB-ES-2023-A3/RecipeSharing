<template>
    <div class="mainContainer">
        <div class="secondaryContainer">
            <div class="titleContainerHP">
                <div class="mainTitleHP">
                    <h1> Trending Topic Recipes </h1>
                </div>

            </div>
            <div class="recipeCarousel">
                <!-- Aquí colocarás las tarjetas de las recetas más populares -->
            </div>
        </div>
        <div class="secondaryContainer">
            <div class="titleContainerHP">
                <div class="mainTitleHP">
                    <h1> Most Liked Recipes </h1>
                </div>
            </div>
            <div class="recipeCarousel">
                <!-- Aquí colocarás las tarjetas de las recetas más populares -->
            </div>
        </div>
        <div class="floating-button" @click="redirectToRecipePage">
            <i class="fas fa-plus"></i>
            <span class="text">Upload new recipe</span>
        </div>
    </div>
</template>

<script>
import '../assets/styles/appStyles.css';
import axios from 'axios';

export default {
    name: "HomePage.vue",
    components: {},
    methods: {
        redirectToRecipePage() {
            this.$router.push('/addRecipe');
        },
        getAllRecipes() {
            console.log("get recipes")
            axios
            .get("/") // Reemplaza "/recetas/" con la URL de tu endpoint de recetas
            .then((response) => {
                console.log(response)
                if (response.status === 200) {
                // La respuesta debe contener las recetas en formato JSON
                const recipes = response.recipes; // Asegúrate de que "recetas" sea la clave correcta en la respuesta JSON
                recipes;
                // Haz lo que necesites con las recetas, por ejemplo, mostrarlas en la vista
                //console.log("Recetas obtenidas:", recipes);
                }
            })
            .catch((error) => {
                console.error("Error al obtener las recetas:", error);
                // Realiza alguna acción en caso de error, como mostrar un mensaje de error
            });
        }
    },
    created() {
        this.getAllRecipes()
    }
};
</script>

<style scoped>

.floating-button {
    position: absolute;
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
