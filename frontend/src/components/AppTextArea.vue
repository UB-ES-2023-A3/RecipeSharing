<template>
  <textarea
    :value="localValue"
    :placeholder="placeholder"
    class="custom-textarea"
    rows="4"
    required
    @blur="updateTextareaValue"
  ></textarea>
</template>

<script>
export default {
  props: {
    value: String, // Propiedad para el valor del textarea
    placeholder: String, // Propiedad para el texto de marcador de posición
  },
  data() {
    return {
      localValue: this.value, // Mantén un valor local para rastrear el contenido
    };
  },
  methods: {
    updateTextareaValue(event) {
      // Emitir un evento personalizado con el nuevo valor del textarea
      this.localValue = event.target.value;
      this.$emit("blur", event.target.value);
      alert("se envia")
    },
  },
};
</script>

<style scoped>
.custom-textarea {
  width: 100%;
  resize: vertical;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
  min-height: 150px;
}
</style>
