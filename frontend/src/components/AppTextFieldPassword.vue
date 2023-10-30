<template>
    <div>
        <div class="text-field-container">
            <input
                v-model="message"
                @blur="saveMessage"
                @focus="clearDefaultMessage"
                ref="messageInput"
                @input="updateTextFieldValue"
                :style="inputStyle"
                :type="isPasswordVisible ? 'text' : 'password'"
            >
        </div>
        <button @click.prevent="togglePasswordVisibility" class="password-toggle-button">
                <i :class="isPasswordVisible ? 'far fa-eye' : 'far fa-eye-slash'"></i>
            </button>
    </div>
</template>





<script>
export default {
    name: "AppTextFieldPassword.vue",
    props: {
        defaultMessage: String,
    },
    data() {
        return {
            message: this.defaultMessage,
            isSaved: false,
            isPasswordVisible: false,
            clearedOnce: false,
        };
    },
    computed: {
        inputStyle() {
            return {
                backgroundColor: this.isSaved ? "#eea94d" : "#FCE4A4",
                color: this.isSaved ? "white" : "black",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                width: "100%",
                minWidth: "300px",
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
            if (!this.clearedOnce) {
                this.clearedOnce = true;
                this.message = ''; // Limpiar el mensaje predeterminado
            }
        },
        togglePasswordVisibility() {
            this.isPasswordVisible = !this.isPasswordVisible;
        },
        updateTextFieldValue() {
            // Emitir un evento personalizado con el valor actualizado
            this.$emit('update:textValue', this.message);
        },
    },
};
</script>

<style>
.text-field-container {
    display: flex;
    align-items: center;
    justify-content: center; /* Añade esto para centrar horizontalmente */
}

.password-toggle-button {
    background-color: #FCE4A4;
    border: 1px;
    border-radius: 5px;
    margin-top: 5px;
}

</style>

