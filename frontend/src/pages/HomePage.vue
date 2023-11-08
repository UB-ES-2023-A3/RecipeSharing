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
            <AppCardCarousel :recipes="this.recipes" :visibleRecipes="3" :logged="this.logged" v-if="recipes.length > 0"></AppCardCarousel>
        </div> <!-- Agregamos el cierre del div que faltaba -->
        <div v-if="this.logged" class="floating-button" @click="redirectToRecipePage">
            <i class="fas fa-plus"></i>
            <span class="text">Upload new recipe</span>
        </div>
    </div>
</template>


<script>
import '../assets/styles/appStyles.css';
import axios from 'axios';
import AppCardCarousel from '@/components/AppCardCarousel.vue';

export default {
    name: "HomePage.vue",

    components: {AppCardCarousel},
    props: {
        logged: Boolean,
        username: String,
        email: String,
        password: String,
    },
    data() {
        return {
            recipes: []
        };
    },
    methods: {
        redirectToRecipePage() {
            this.$router.push('/addRecipe');
        },
        getAllRecipes() {
            // Axios para coger el template
            axios
                .get("/")
                .then((response) => {
                    if (response.status === 200) {
                        const data = response.data
                        console.log("Data is:", data)
                    }
                })
                .catch((error) => {
                    console.error("Error al obtener las recetas:", error);
                });

            // Axios para recibir las recetas
            axios
                .get("/getRecipies/")
                .then((response) => {
                    if (response.status === 200) {
                        const recipes = response.data.recipes;
                        this.recipes = recipes;
                        console.log(this.recipes)
                    }
                })
                .catch((error) => {
                    console.error("Error al obtener las recetas:", error);
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
