<template>
    <div class="card-carousel">
        <div class="carousel-container" :style="containerStyle">
            <div
                    class="carousel-item"
                    v-for="(recipe, index) in recipes"
                    :key="index"
            >
                <AppCardRecipe :recipe="recipe" :logged="this.logged" :username="username"></AppCardRecipe>
            </div>
        </div>
    </div>
</template>

<script>

import AppCardRecipe from '@/components/AppCardRecipe.vue';

export default {
    components: {AppCardRecipe},
    props: {
        recipes: Array,
        visibleRecipes: Number,
        username: String,
        logged: Boolean,
    },
    data() {
        return {};
    },
    computed: {
        containerStyle() {
            return {};
        },
    }
};

</script>

<style scoped>

.card-carousel {
    text-align: center;
}

.carousel-container {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 20px;
    padding: 40px;
    border-radius: 4px;
    height: auto;
    width: 100%;
    margin: 15px auto 0;
    max-width: 100%;
}

.carousel-item {
    flex: 0 0 auto;
}

button {
    margin-top: 10px;
    background-color: #ff5733;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px;
    cursor: pointer;
}

</style>
