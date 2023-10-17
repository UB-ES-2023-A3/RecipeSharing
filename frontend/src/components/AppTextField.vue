<template>
  <div>
    <input
      v-model="message"
      @blur="saveMessage"
      @keyup.enter="saveMessage"
      @focus="clearDefaultMessage"
      ref="messageInput"
      :style="inputStyle"
      @input="updateTextFieldValue"
    >
  </div>
</template>

<script>
export default {
  props: {
    defaultMessage: String,
  },
  data() {
    return {
      message: this.defaultMessage,
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
      this.message = "";
    },
    updateTextFieldValue() {
      // Emitir un evento personalizado con el valor actualizado
      this.$emit('update:textValue', this.message);
    },
  },
};
</script>
