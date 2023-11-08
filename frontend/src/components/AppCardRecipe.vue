<template>
    <div class="recipe-card">
        <!-- Recipe title that can be clicked to toggle the popup -->
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
        <!-- Popup content that displays recipe details -->
        <div v-if="showPopup" class="popup">
            <div class="popup-content">
                <!-- Scrollable content for recipe details -->
                <div class="scrollable-content">
                    <!-- Recipe title and creation date -->
                    <div class="section">
                        <h2>{{ this.recipe.title }}</h2>
                        <p><strong>Creation Date:</strong> {{ this.recipe.creation_date }}</p>
                    </div>
                    <!-- Ingredients section -->
                    <div class="section">
                        <h3>Ingredients</h3>
                        <ul>
                            <!-- List each ingredient from the parsed string -->
                            <li v-for="(step, index) in this.parseText(this.recipe.ingredients)" :key="index">{{
                                step
                                }}
                            </li>
                        </ul>
                    </div>
                    <!-- Instructions section -->
                    <div class="section">
                        <h3>Instructions</h3>
                        <ol>
                            <!-- List each instruction step from the parsed string -->
                            <li v-for="(step, index) in this.recipe.instructions.split('\n')" :key="index">{{
                                step
                                }}
                            </li>
                        </ol>
                    </div>
                    <!-- Allergens section -->
                    <div class="section">
                        <h3>Allergens</h3>
                        <ul>
                            <!-- List each allergen from the parsed string -->
                            <li v-for="(step, index) in this.parseText(this.recipe.allergens)" :key="index">{{
                                step
                                }}
                            </li>
                        </ul>
                    </div>
                    <!-- Recipe type, preparation time, and servings sections -->
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
                <!-- Close button to hide the popup -->
                <button @click="togglePopup">Close</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        recipe: Object, // Object containing recipe data
        logged: Boolean
    },
    data() {
        return {
            showPopup: false, // Flag to control the visibility of the popup
        };
    },
    methods: {
        // Function to toggle the visibility of the popup
        togglePopup() {
            this.showPopup = !this.showPopup;
        },
        goToLogin() {
            this.$router.push('/login'); // Navigate to the login page
        },
        // Function to parse a comma-separated text into an array
        parseText(listString) {
            // Remove brackets [ and ]
            const withoutBrackets = listString.replace(/\[|\]/g, '');

            // Remove single quotes '
            const withoutSingleQuotes = withoutBrackets.replace(/'/g, '');

            // Split the string into an array using a comma as a separator
            return withoutSingleQuotes.split(',');
        },
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

.section h2 {
    font-size: 1.5rem;
}

.section h3 {
    font-size: 1.2rem;
}

/* Additional styles can be defined here */
</style>