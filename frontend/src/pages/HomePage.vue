<template>
    <div id="homeMainContainer">
        <div id="homeNameSearcherContainer">
            <div class="searchContainer">
                <input class="homeNameSearcher" type="text" v-model="selectedName" placeholder="Search by name"
                       @keyup.enter="getRecipesByName"/>
            </div>
        </div>
        <div id="homeFilterContainer">
            <HomeFilterDropdown
                    class="homeFilterDropdown"
                    :options="preparationTimeOptions"
                    v-model="selectedPreparationTime"
                    label="Preparation Time Filter"
                    groupTitle="Selected Preparation Time"
                    @update:selectedValue="handlePrepTimeUpdate"
                    :choose="false"
                    :reset="showRecipesFilterPrepTime"
            />
            <HomeFilterDropdown
                    class="homeFilterDropdown"
                    :options="[{ 'groupName': 'Servings', 'options': [1,2,3,4,5,6,7,8,9,10] }]"
                    v-model="selectedServings"
                    label="Servings Filter"
                    groupTitle="Selected Serving"
                    @update:selectedValue="handleServingUpdate"
                    :choose="false"
                    :reset="showRecipesFilterServings"
            />
            <HomeFilterDropdown
                    class="homeFilterDropdown"
                    :options="typesOptions"
                    v-model="selectedTypes"
                    label="Type Filter"
                    groupTitle="Selected Types"
                    @update:selectedValue="handleTypeUpdate"
                    :choose="false"
                    :reset="showRecipesFilterTypes"
            />
            <HomeFilterDropdown
                    class="homeFilterDropdown"
                    :options="allergensOptions"
                    v-model="selectedAllergens"
                    label="Allergens Filter"
                    groupTitle="Selected Allergens"
                    @update:selectedValue="handleAllergensUpdate"
                    :choose="false"
                    :reset="showRecipesFilterAllergens"
            />
            <HomeFilterDropdown
                    class="homeFilterDropdown"
                    :options="ingredientsOptions"
                    v-model="selectedIngredients"
                    label="Ingredients Filter"
                    groupTitle="Selected Ingredients"
                    @update:selectedValue="handleIngredientsUpdate"
                    :choose="false"
                    :reset="showRecipesFilterIngredients"
            />
        </div>
        <div v-if="showRecipesFilter">
            <div v-if="showRecipesFilterName">
                <AppCardCarousel :type="name" :recipeName="selectedName" :recipes="recipesByName" :visibleRecipes="8"
                                 :logged="logged" :username="username"
                                 v-if="recipesByName.length > 0"></AppCardCarousel>
                <div id="homeSectionFilterError">
                    <p v-if="recipesByName.length === 0" class="homeSectionFilterError">No recipes found by that
                        name.</p>
                </div>
            </div>
            <!-- ... Repetir el patrón para otras secciones de filtros ... -->
        </div>
        <div id="homeSectionContainer">
            <div id="homeSectionTitleContainer">
                <h1> Most Recent Recipes </h1>
            </div>
            <div id="homeSectionCarrouselContainer">
                <AppCardCarousel :type="recent" :recipes="recipesByDate" :visibleRecipes="8" :logged="logged"
                                 :username="username" v-if="recipesByDate.length > 0"></AppCardCarousel>
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
                <AppCardCarousel :type="rate" :recipes="recipesByRate" :visibleRecipes="8" :logged="logged"
                                 :username="username" v-if="recipesByRate.length > 0"></AppCardCarousel>
            </div>
            <div id="homeSectionSeparatorContainer">
                <hr>
            </div>
        </div>
        <div v-if="logged" class="homeFloatingButton" @click="redirectToRecipePage">
            <i class="fas fa-plus"></i>
            <span class="text">Upload new recipe</span>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import AppCardCarousel from '@/components/AppCardCarousel.vue';
import prepTimeData from "@/assets/lists/prepTime.json";
import typesData from "@/assets/lists/Types.json";
import allergensOptions from "@/assets/lists/Allergens.json";
import ingredientsData from "@/assets/lists/Ingredients.json";
import HomeFilterDropdown from "@/components/HomeFilterDropdown.vue";

export default {
    name: "HomePage",
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
            recipesByName: [],
            recipesByFilter: [],
            rate: "rate",
            recent: "recent",
            name: "name",
            selectedName: "",
            prepTime: "preparation_time",
            selectedPreparationTime: "",
            preparationTimeOptions: prepTimeData,
            servings: "servings",
            selectedServings: "",
            recipe_type: "recipe_type",
            selectedTypes: "",
            typesOptions: typesData,
            allergens: "allergens",
            selectedAllergens: "",
            allergensOptions: allergensOptions,
            ingredients: "ingredients",
            selectedIngredients: "",
            ingredientsOptions: ingredientsData,
            showRecipesFilter: false,
            showRecipesFilterName: false,
            showRecipesFilterPrepTime: false,
            showRecipesFilterServings: false,
            showRecipesFilterTypes: false,
            showRecipesFilterAllergens: false,
            showRecipesFilterIngredients: false,
        };
    },
    methods: {
        redirectToRecipePage() {
            this.$router.push('/addRecipe');
        },
        handlePrepTimeUpdate(value) {
            this.selectedPreparationTime = parseInt(value);
            this.getRecipesByPrepTime();
        },
        handleServingUpdate(value) {
            this.selectedServings = parseInt(value);
            this.getRecipesByServings();
        },
        resetFlags() {
            this.showRecipesFilterName = false;
            this.showRecipesFilterPrepTime = false;
            this.showRecipesFilterServings = false;
            this.showRecipesFilterTypes = false;
            this.showRecipesFilterAllergens = false;
            this.showRecipesFilterIngredients = false;
        },
        handleTypeUpdate(value) {
            this.selectedTypes = value;
            this.getRecipesByTypes();
        },
        handleAllergensUpdate(value) {
            this.selectedAllergens = value;
            this.getRecipesByAllergens();
        },
        handleIngredientsUpdate(value) {
            this.selectedIngredients = value;
            this.getRecipesByIngredients();
        },
        async fetchData() {
            try {
                await axios.get("/");
                // Puedes realizar alguna lógica con los datos si es necesario
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },
        async getRecipesByRate() {
            await this.fetchData();
            try {
                const response = await axios.get("recipe/rate/");
                if (response.status === 200) {
                    const recipes = response.data.recipes;
                    // Puedes manejar las recetas de 'rate' de manera específica aquí
                    this.recipesByRate = recipes;
                    console.log(response.data.recipes);
                }
            } catch (error) {
                console.error("Error fetching recipes by rate:", error);
            }
        },
        async getRecipesByRecent() {
            await this.fetchData();
            try {
                const response = await axios.get("recipe/recent/");
                if (response.status === 200) {
                    const recipes = response.data.recipes;
                    // Puedes manejar las recetas de 'recent' de manera específica aquí
                    this.recipesByDate = recipes;
                    console.log(response.data.recipes);
                }
            } catch (error) {
                console.error("Error fetching recent recipes:", error);
            }
        },
        async getRecipesByName() {
            await this.fetchData();
            try {
                const response = await axios.get(`recipe/name/${this.selectedName}`);
                if (response.status === 200) {
                    const recipes = response.data.recipes;
                    this.resetFlags();
                    this.recipesByName = recipes;
                    this.showRecipesFilter = true;
                    this.showRecipesFilterName = true;
                    console.log(response.data.recipes);
                }
            } catch (error) {
                console.error("Error fetching recipes by name:", error);
            }
        },
        async getRecipesByAllergens() {
            await this.fetchData();
            try {
                const response = await axios.get(`recipe/filter/allergens/${this.selectedAllergens}`);
                if (response.status === 200) {
                    this.resetFlags();
                    const recipes = response.data.recipes;
                    this.recipesByFilter = recipes;
                    this.showRecipesFilter = true;
                    this.showRecipesFilterAllergens = true;
                    console.log(response.data.recipes);
                }
            } catch (error) {
                console.error("Error fetching recipes by allergens:", error);
            }
        },
        async getRecipesByIngredients() {
            await this.fetchData();
            try {
                const response = await axios.get(`recipe/filter/ingredients/${this.selectedIngredients}`);
                if (response.status === 200) {
                    this.resetFlags();
                    const recipes = response.data.recipes;
                    this.recipesByFilter = recipes;
                    this.showRecipesFilter = true;
                    this.showRecipesFilterIngredients = true;
                    console.log(response.data.recipes);
                }
            } catch (error) {
                console.error("Error fetching recipes by ingredients:", error);
            }
        },
        async getRecipesByPrepTime() {
            await this.fetchData();
            try {
                const response = await axios.get(`recipe/filter/preparation_time/${this.selectedPreparationTime}`);
                if (response.status === 200) {
                    this.resetFlags();
                    const recipes = response.data.recipes;
                    this.recipesByFilter = recipes;
                    this.showRecipesFilter = true;
                    this.showRecipesFilterPrepTime = true;
                    console.log(response.data.recipes);
                }
            } catch (error) {
                console.error("Error fetching recipes by preparation time:", error);
            }
        },
        async getRecipesByTypes() {
            await this.fetchData();
            try {
                const response = await axios.get(`recipe/filter/types/${this.selectedTypes}`);
                if (response.status === 200) {
                    this.resetFlags();
                    const recipes = response.data.recipes;
                    this.recipesByFilter = recipes;
                    this.showRecipesFilter = true;
                    this.showRecipesFilterTypes = true;
                    console.log(response.data.recipes);
                }
            } catch (error) {
                console.error("Error fetching recipes by types:", error);
            }
        },
        async getRecipesByServings() {
            await this.fetchData();
            try {
                const response = await axios.get(`recipe/filter/servings/${this.selectedServings}`);
                if (response.status === 200) {
                    this.resetFlags();
                    const recipes = response.data.recipes;
                    this.recipesByFilter = recipes;
                    this.showRecipesFilter = true;
                    this.showRecipesFilterServings = true;
                    console.log(response.data.recipes);
                }
            } catch (error) {
                console.error("Error fetching recipes by servings:", error);
            }
        },
    },
    created() {
        this.getRecipesByRate();
        this.getRecipesByRecent();
    }
};
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

#homeNameSearcherContainer {
    text-align: center;
    margin-top: 5%;
}

.homeNameSearcher {
    position: relative;
    padding: 8px 35px 8px 12px;
}

/* Estilos para el campo de búsqueda */
.homeNameSearcher {
    padding: 8px 12px;
    border-radius: 10px;
    border: 1px solid #ccc;
    font-size: 16px;
    width: 50%;
    margin: 2% auto;
    position: relative;
}

.homeFloatingButton {
    position: fixed;
    bottom: 5%;
    right: 5%;
    background-color: #fd9846;
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
    margin: 0 0 2%;
}

.homeFilterDropdown {
    width: 100%;
    max-width: calc(16.7% - 1.7%);
    margin-right: 2%;
}

</style>

