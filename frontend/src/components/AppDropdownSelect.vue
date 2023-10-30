<template>
  <div class="container">
    <select @change="addSelectedOption" class="full-width-dropdown" v-model="localSelectedValue">
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
    selectedValue: Array, // Cambia el tipo de prop a Array para recibir múltiples selecciones
    label: String,
    groupTitle: String,
  },
  data() {
    return {
      localSelectedValue: this.selectedValue, // Utiliza un valor local
      selectedOptions: [], // Lista para almacenar elementos seleccionados
    };
  },
  methods: {
    addSelectedOption() {
      const selectedValue = this.localSelectedValue;
      if (selectedValue && !this.selectedOptions.includes(selectedValue)) {
        this.selectedOptions.push(selectedValue);
        this.$emit('update:selectedValue', this.selectedOptions);
      }
    },
    removeSelectedOption(index) {
      this.selectedOptions.splice(index, 1);
    },
  },
};
</script>


<style scoped>
.container {
  background-color: #FCE4A4; /* Fondo azul */
  margin: 2px 5px; /* Márgenes personalizados */
  padding: 10px; /* Espacio interno para contenido */
  border-radius: 10px;
}
.remove-button {
  cursor: pointer; 
  margin-left: 10px;
}
.selected-ingredients-title {
  font-size: 16px; /* Tamaño de fuente personalizado */
  margin-bottom: 2px; /* Espacio personalizado después del título */
}
</style>
