<template>
  <div class="container">
    <select @change="addSelectedOption" class="full-width-dropdown">
      <option value="" disabled>Select {{ label }}</option>
      <optgroup v-for="group in options" :label="group.groupName" :key="group.groupName">
        <option v-for="option in group.options" :value="option" :key="option">{{ option }}</option>
      </optgroup>
    </select>

    <div class="selected-values">
      <h2 class="selected-ingredients-title">{{ groupTitle }}</h2>
      <button class="selected-value" v-for="(selected, index) in selectedOptions" :key="index" @click="removeSelectedOption(index)">
        {{ selected }} <span class="remove-button">✖</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
    selectedValue: String,
    label: String,
    groupTitle: String,
  },
  data() {
    return {
      selectedOptions: [], // Lista para almacenar elementos seleccionados
    };
  },
  methods: {
    addSelectedOption(event) {
      const selectedValue = event.target.value;
      if (selectedValue && !this.selectedOptions.includes(selectedValue)) {
        this.selectedOptions.push(selectedValue);
        this.$emit('update:selectedOptions', this.selectedOptions);
      }
    },
    removeSelectedOption(index) {
      this.selectedOptions.splice(index, 1);
      this.$emit('update:selectedOptions', this.selectedOptions);
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #FCE4A4;
  margin: 2px 5px;
  padding: 10px;
  border-radius: 10px;
}
.remove-button {
  cursor: pointer;
  margin-left: 10px;
}
.selected-ingredients-title {
  font-size: 16px;
  margin-bottom: 2px;
}
</style>
