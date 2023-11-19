<template>
    <div class="filterContainer">
        <div class="titleFilterContainer">
            <h2>{{ label }}</h2>
        </div>
        <!-- Dropdown select to choose options -->
        <div class="dropdownContainer">
            <select @change="addSelectedOption" class="full-width-dropdown" v-model="localSelectedValue">
                <optgroup v-for="group in options" :label="group.groupName" :key="group.groupName">
                    <option v-for="option in group.options" :value="option" :key="option">{{ option }}</option>
                </optgroup>
            </select>
        </div>
        <!-- Display selected values and allow removal -->
        <div class="selected-values">
            <h2 class="selected-ingredients-title">{{ groupTitle }}</h2>
            <button class="selected-value" v-for="(selected, index) in selectedOptions" :key="index"
                    @click="removeSelectedOption(index)">
                {{ selected }} <span class="remove-button">✖</span>
            </button>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        options: Array, // List of options grouped by category
        selectedValue: Array, // Change the prop type to Array for multiple selections
        label: String, // Label for the select dropdown
        groupTitle: String, // Title for the selected group
        choose: Boolean,
        reset: Boolean,
    },
    data() {
        return {
            localSelectedValue: this.selectedValue, // Use a local value to bind to the select
            selectedOptions: [], // List to store selected items
        };
    },
    methods: {
        addSelectedOption() {
            const selectedValue = this.localSelectedValue;
            // Check if the selected value is valid and not already selected
            if (this.choose == false) {
                this.selectedOptions = [];
            }
            if (selectedValue && !this.selectedOptions.includes(selectedValue)) {
                this.selectedOptions.push(selectedValue);
                this.$emit('update:selectedValue', this.selectedOptions);
            }
        },
        removeSelectedOption(index) {
            this.selectedOptions.splice(index, 1);
            this.localSelectedValue = '';
        },
    },
    watch: {
        reset(newVal) {
            if (newVal == false) {
                this.localSelectedValue = '';
                this.selectedOptions = [];
            }
        }
    }
};

</script>

<style scoped>

.filterContainer {
    width: 10%;
    height: 10%;
    margin-top: 1%;
    margin-bottom: 1%;
    text-align: center;
    background-color: #ffa500;
    border: 1px solid #b69b70;
    border-radius: 10px;
    padding: 1%;
}

.remove-button {
    cursor: pointer;
}

.selected-ingredients-title {
    font-size: 16px;
    margin-bottom: 2px;
}

.full-width-dropdown {
    margin-top: 10px;
    width: 100%;
    resize: vertical;
}

</style>