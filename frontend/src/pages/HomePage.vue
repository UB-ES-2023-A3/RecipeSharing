<template>
    <div id="homeMainContainer">
        <div id="homeFilterContainer">
            <!--            <button type="button" class="homeFilterButton" :class="{ 'activeButton': isButtonActive }"-->
            <!--                    @click="getRecipesByPrepTime">Preparation Time-->
            <!--            </button>-->
            <HomeFilterDropdown
                    :options="[{ 'groupName': 'Servings', 'options': [1,2,3,4,5,6,7,8,9,10] }]"
                    v-model="servings"
                    label="Servings Filter"
                    groupTitle="Selected Serving"
                    @update:selectedValue="handleServingUpdate"
                    :choose="false"
            />
        </div>
        <div id="homeSectionContainer" v-if="showRecipesFilter">
            <div id="homeSectionTitleContainer">
                <h1> Searched Recipes </h1>
            </div>
            <div id="homeSectionCarrouselContainer">
                <AppCardCarousel :type="prepTime" :recipes="this.recipesByFilter" :visibleRecipes="8"
                                 :logged="this.logged"
                                 :username="this.username" v-if="recipesByFilter.length > 0"></AppCardCarousel>
            </div>
            <div id="homeSectionFilterError">
                <p v-if="this.recipesByFilter.length === 0" class="homeSectionFilterError">No recipes found by that
                    filter.</p>
            </div>
            <div id="homeSectionSeparatorContainer">
                <hr>
            </div>
        </div>
        <div id="homeSectionContainer">
            <div id="homeSectionTitleContainer">
                <h1> Most Recent Recipes </h1>
            </div>
            <div id="homeSectionCarrouselContainer">
                <AppCardCarousel :type="recent" :recipes="this.recipesByDate" :visibleRecipes="8" :logged="this.logged"
                                 :username="this.username" v-if="recipesByDate.length > 0"></AppCardCarousel>
            </div>
            <div id="homeSectionSeparatorContainer">
                <hr>
            </div>
        </div>
        <div id="homeSectionContainer">
            <div id="homeSectionTitleContainer">
                <h1> Most Liked Recipes </h1>
            </div>
            <div id="homeSectionCarrouselContainer">
                <AppCardCarousel :type="rate" :recipes="this.recipesByRate" :visibleRecipes="8" :logged="this.logged"
                                 :username="this.username" v-if="recipesByRate.length > 0"></AppCardCarousel>
            </div>
            <div id="homeSectionSeparatorContainer">
                <hr>
            </div>
        </div>
        <div v-if="this.logged" class="homeFloatingButton" @click="redirectToRecipePage">
            <i class="fas fa-plus"></i>
            <span class="text">Upload new recipe</span>
        </div>
    </div>
</template>


<script>
import '../assets/styles/appStyles.css';
import axios from 'axios';
import AppCardCarousel from '@/components/AppCardCarousel.vue';
import HomeFilterDropdown from "@/components/HomeFilterDropdown.vue";

export default {
    name: "HomePage.vue",

    components: {AppCardCarousel, HomeFilterDropdown},
    props: {
        logged: Boolean,
        username: String,
        email: String,
        password: String,
    },
    data() {
        return {
            recipesByDate: [],
            recipesByRate: [],
            recipesByFilter: [],
            rate: "rate",
            recent: "recent",
            prepTime: "prepTime",
            showRecipesFilter: false,
            servings: "",
        };
    },
    methods: {
        redirectToRecipePage() {
            this.$router.push('/addRecipe');
        },
        handleServingUpdate(value) {
            this.servings = parseInt(value);
            this.getRecipesByServings()
        },
        getRecipesByRate() {
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
                .get("recipe/rate/")
                .then((response) => {
                    if (response.status === 200) {
                        const recipes = response.data.recipes;
                        this.recipesByRate = recipes;
                        console.log(response.data.recipes)
                    }
                })
                .catch((error) => {
                    console.error("Error al obtener las recetas:", error);
                });
        },
        getRecipesByRecent() {
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
                .get("recipe/recent/")
                .then((response) => {
                    if (response.status === 200) {
                        const recipes = response.data.recipes;
                        this.recipesByDate = recipes;
                        console.log(response.data.recipes)
                    }
                })
                .catch((error) => {
                    console.error("Error al obtener las recetas:", error);
                });
        },
        getRecipesByServings() {
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
                .get(`recipe/filter/servings/${this.servings}`)
                .then((response) => {
                    if (response.status === 200) {
                        const recipes = response.data.recipes;
                        this.recipesByFilter = recipes;
                        this.showRecipesFilter = true;
                        console.log(response.data.recipes)
                    }
                })
                .catch((error) => {
                    console.error("Error al obtener las recetas:", error);
                });
        },

    },
    created() {
        this.getRecipesByRate();
        this.getRecipesByRecent();
    }
}
;
</script>

<style scoped>

#homeSectionTitleContainer {
    background-color: #ff5733;
    border: 1px solid #b69b70;
    border-radius: 10px;
    margin-left: 2%;
    margin-right: 2%;
    padding-left: 1%;
    display: flex;
    align-items: center;
    color: white;
    font-size: 12px; /* Ajusta el tamaño del texto */
    font-weight: bold; /* Texto en negrita */
}

.homeFloatingButton {
    position: fixed;
    bottom: 5%;
    right: 5%;
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

.homeFloatingButton i {
    font-size: 24px;
}

.homeFloatingButton .text {
    display: none;
    opacity: 0;
    font-size: 14px;
    transition: opacity 0.3s, font-size 0.3s;
}

.homeFloatingButton:hover {
    width: 10%;
    border-radius: 5px; /* Cambiar el borde para que sea más rectangular */
}

.homeFloatingButton:hover i {
    display: none;
    font-size: 0;
}

.homeFloatingButton:hover .text {
    display: inline;
    opacity: 1;
    font-size: 14px;
    transition: opacity 0.3s, font-size 0.3s;
}

hr {
    border-top: 1px solid #df8500;
    border-bottom: 1px solid #ffbf00;
    margin-left: 2%;
    margin-right: 2%;
    margin-bottom: 2.5%;
}

#homeSectionFilterError {
    text-align: center;
}

#homeSectionFilterError {
    color: red;
    margin-top: 5px;
    font-size: 20px;
}

#homeFilterContainer {
    display: flex;
    justify-content: center; /* Centrado horizontal */
    align-items: center; /* Centrado vertical */
}

</style>