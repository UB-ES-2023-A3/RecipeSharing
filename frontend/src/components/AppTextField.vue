<template>
  <div>
    <input
      v-model="message"
      @blur="saveMessage"
      @keyup.enter="saveMessage"
      ref="messageInput"
      :style="inputStyle"
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Introduce the name of your recipe",
      isSaved: false,
    };
  },
  computed: {
    inputStyle() {
      return {
        backgroundColor: "#f0f0f0", // Cambia este color al que desees
        padding: "10px", // Añade relleno para una apariencia adecuada
        border: "1px solid #ccc", // Agrega un borde para resaltar el cuadro de texto
        borderRadius: "5px", // Bordes redondeados
        width: "auto", // Ancho automático para ajustarse al contenido
        minWidth: "150px", // Ancho mínimo para evitar que sea demasiado estrecho
        color: this.isSaved ? "green" : "black",
      };
    },
  },
  methods: {
    saveMessage() {
      this.isSaved = true;
      this.$refs.messageInput.blur();
    },
  },
};
</script>

<style scoped>
/* Estilos personalizados para tu componente */
</style>
