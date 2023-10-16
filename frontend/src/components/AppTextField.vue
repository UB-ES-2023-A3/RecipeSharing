<template>
  <div>
    <input
      v-model="message"
      @blur="saveMessage"
      @keyup.enter="saveMessage"
      @focus="clearDefaultMessage"
      ref="messageInput"
      :style="inputStyle"
    >
  </div>
</template>

<script>
export default {
   props: {
    defaultMessage: String, // Propiedad para el texto predeterminado
  },
  data() {
    return {
      message: this.defaultMessage, // Usa la propiedad defaultMessage como valor inicial
      isSaved: false,
    };
  },
  computed: {
    inputStyle() {
      return {
        backgroundColor: this.isSaved ? "#52BE80" : "#34495E",
        color: this.isSaved ? "white" : "white",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        width: "auto",
        minWidth: "300px",
        textAlign: "center",
        display: "block",
        margin: "0 auto",
        marginTop: "10px",
      };
    },
  },
  methods: {
    saveMessage() {
      this.isSaved = true;
      this.$refs.messageInput.blur();
    },
    clearDefaultMessage() {
      // Borra el mensaje predeterminado al hacer clic en el cuadro de entrada
      this.message = "";
    },
  },
};
</script>

<style scoped>
/* Estilos personalizados para tu componente */
</style>
