<template>
    <div>
        <div class="mainContainer">
            <div class="secondaryContainer">
                <div class="titleContainer">
                    <div class="mainTitle">
                        <h1>ADD A NEW RECIPE</h1>
                    </div>
                </div>
            </div>
            <div class="secondaryContainer">
                <div class="subtitleContainer">
                    <div class="subTitle">
                        <h1>NAME OF THE RECIPE</h1>
                    </div>
                </div>
                <AppTextField
                        :defaultMessage="defaultMessageName"
                        @update:textValue="textFieldName = $event"
                />
            </div>
            <div class="secondaryContainer">
                <div class="subtitleContainer">
                    <div class="subTitle">
                        <h1>INGREDIENTS</h1>
                    </div>
                </div>
                <AppFoodMultiSelect :optionGroups="foodLists" :buttonTitle="IngredientButton"
                                    :notesTitle="IngredientNotes"/>
            </div>
            <div class="secondaryContainer">
                <div class="subtitleContainer">
                    <div class="subTitle">
                        <h1>TYPE OF THE RECIPE</h1>
                    </div>
                </div>
                <AppTextField :defaultMessage="defaultMessageType"/>
            </div>
            <div class="secondaryContainer">
                <div class="subtitleContainer">
                    <div class="subTitle">
                        <h1>ALLERGENS</h1>
                    </div>
                </div>
                <AppFoodMultiSelect :optionGroups="AllergensLists" :buttonTitle="AllergensButton"
                                    :notesTitle="AllergensNotes"/>
            </div>
            <div>
                <button @click="doSomething">Haz Algo</button>
            </div>
        </div>
    </div>
</template>

<script>
import AppFoodMultiSelect from "@/components/AppFoodMultiSelect.vue";
import AppTextField from "@/components/AppTextField.vue";
import "../assets/styles/appStyles.css";

export default {
    components: {AppFoodMultiSelect, AppTextField},
    data() {
        return {
            textFieldName: "holaaaaa", // Variable para almacenar el valor del campo de texto
            defaultMessageName: "Introduce a name for your recipe",
            defaultMessageType: "Introduce a type for your recipe",
            IngredientButton: "Choose Ingredients",
            AllergensButton: "Choose Allergens",
            IngredientNotes: "Ingredients choosen:",
            AllergensNotes: "Allergens choosen:",
            foodLists: [
                {
                    groupName: "Fruits",
                    options: [
                        "Apple",
                        "Banana",
                        "Orange",
                        "Strawberry",
                        "Grapes",
                        "Mango",
                    ],
                },
                {
                    groupName: "Vegetables",
                    options: [
                        "Carrot",
                        "Broccoli",
                        "Spinach",
                        "Tomato",
                        "Cucumber",
                        "Cauliflower",
                    ],
                },
                {
                    groupName: "Meat",
                    options: ["Chicken", "Beef", "Pork", "Lamb", "Turkey", "Duck"],
                },
                {
                    groupName: "Dairy",
                    options: ["Milk", "Cheese", "Yogurt", "Butter", "Cream", "Eggs"],
                },
                {
                    groupName: "Grains",
                    options: ["Rice", "Pasta", "Bread", "Oats", "Quinoa", "Barley"],
                },
                {
                    groupName: "Seafood",
                    options: ["Salmon", "Shrimp", "Tuna", "Lobster", "Crab", "Scallops"],
                },
            ],
            AllergensLists: [
                {
                    groupName: "Common Allergens",
                    options: [
                        "Milk",
                        "Eggs",
                        "Peanuts",
                        "Tree Nuts (such as almonds, walnuts, cashews, pistachios, and pecans)",
                        "Soy",
                        "Wheat",
                        "Fish",
                        "Shellfish (such as crab, lobster, and shrimp)",
                    ],
                },
                {
                    groupName: "Fruits",
                    options: [
                        "Apple",
                        "Banana",
                        "Orange",
                        "Strawberry",
                        "Grapes",
                        "Mango",
                    ],
                },
                {
                    groupName: "Vegetables",
                    options: [
                        "Carrot",
                        "Broccoli",
                        "Spinach",
                        "Tomato",
                        "Cucumber",
                        "Cauliflower",
                    ],
                },
                {
                    groupName: "Meat",
                    options: [
                        "Chicken",
                        "Beef",
                        "Pork",
                        "Lamb",
                        "Turkey",
                        "Duck",
                    ],
                },
                {
                    groupName: "Dairy Alternatives",
                    options: [
                        "Soy Milk",
                        "Almond Milk",
                        "Coconut Milk",
                        "Oat Milk",
                    ],
                },
            ]
        };
    },
    methods: {
        doSomething() {
            // Coloca aquí la acción que deseas ejecutar cuando se haga clic en el botón.
            alert(this.textFieldName);
        }
    },
};
</script>

<style scoped></style>
