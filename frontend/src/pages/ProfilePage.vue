<template>
    <div class="mainContainer">
        <div class="secondaryContainer">
            <div class="titleContainerHP">
                <div class="mainTitleHP">
                    <h1> Username </h1>
                </div>
            </div>
        </div>
        <div class="secondaryContainer">
            <div class="titleContainerHP">
                <div class="mainTitleHP">
                    <h1> Name </h1>
                </div>
            </div>
        </div>
        <div class="secondaryContainer">
            <div class="titleContainerHP">
                <div class="mainTitleHP">
                    <h1> Email </h1>
                </div>
            </div>
        </div>
        <div class="secondaryContainer">
            <div class="titleContainerHP">
                <div class="mainTitleHP">
                    <h1> Favourite Recipes </h1>
                </div>
            </div>
            <AppCardCarousel :type="recent" :recipes="this.recipesByRate" :visibleRecipes="8" :logged="this.logged"
                             :username="this.username" v-if="recipesByRate.length > 0"></AppCardCarousel>
        </div>
        <div class="secondaryContainer">
            <div class="titleContainerHP">
                <div class="mainTitleHP">
                    <h1> Own Recipes </h1>
                </div>
            </div>
            <AppCardCarousel :type="rate" :recipes="this.recipesByRate" :visibleRecipes="8" :logged="this.logged"
                             :username="this.username" v-if="recipesByRate.length > 0"></AppCardCarousel>
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
            recipesByDate: [],
            recipesByRate: [],
            rate: "rate",
            recent: "recent",
        };
    },
    methods: {
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
        }
    },
    created() {
        this.getRecipesByRate();
        this.getRecipesByRecent();
    }
};
</script>

<style scoped>

</style>
