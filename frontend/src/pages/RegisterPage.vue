<template>
    <div class="mainContainer" style="color:black">
        <div class="register-form-background">
            <div class="mainTitle">
                <h1>Register</h1>
            </div>
            <form @submit.prevent="register" class="register-form">
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" id="username" v-model="username" class="input"/>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="email" @input="checkEmail" class="input"/>
                    <p v-if="emailError" class="error">This email extension is not valid</p>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" v-model="password" @input="checkPassword" class="input"/>
                    <p v-if="passwordError" class="error">This password is not valid</p>
                </div>
                <div class="form-group">
                    <label for="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" v-model="confirmPassword" class="input"/>
                </div>
                <div class="password-strength">
                    Password Strength:
                    <div class="password-strength-meter">
                        <div class="password-strength-bar" :style="{ width: passwordStrength + '%' }"></div>
                    </div>
                </div>
                <p>
                    <a href="/login">Back to Login</a>
                </p>
                <div class="secondaryContainer" style="background-color:white">
                    <button type="submit" class="submit-button">Register</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import '../assets/styles/appStyles.css';

export default {
    name: "RegisterPage",
    data() {
        return {
            username: "",
            email: "",
            emailError: false,
            password: "",
            passwordError: false,
            confirmPassword: "",
            passwordStrength: 0,
        };
    },
    methods: {
        checkEmail() {
            // Expresión regular que verifica una dirección de correo electrónico.
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            if (!emailRegex.test(this.email)) {
                this.emailError = true;
            } else {
                const validEmailExtensions = ["example.com", "yourdomain.com", "gmail.com", "hotmail.com"]; // Agrega aquí las extensiones válidas

                // Obtén la extensión del correo electrónico
                const emailParts = this.email.split("@");
                const emailExtension = emailParts[1];

                // Verifica si la extensión está en la lista de extensiones válidas
                this.emailError = !validEmailExtensions.includes(emailExtension);
            }
        },
        checkPassword() {
            const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

            this.passwordError = !passwordRegex.test(this.password);

            // Calcula la fuerza de la contraseña (puedes personalizar esta lógica)
            let strength = 0;
            if (this.password.length >= 8) {
                strength++;
            }
            if (/[a-z]/.test(this.password) && /[A-Z]/.test(this.password)) {
                strength++;
            }
            if (/\d/.test(this.password)) {
                strength++;
            }
            if (/\W|_/.test(this.password)) {
                strength++;
            }

            // Calcula el porcentaje de fortaleza
            this.passwordStrength = (strength / 4) * 100;
        },
        register(e) {
            e.preventDefault();

            // Validar que la contraseña y la confirmación coincidan
            if (this.password !== this.confirmPassword) {
                alert("Passwords do not match");
            } else {
                // Realizar el registro aquí
                alert("Registration successful!");
            }
        },
    },
};
</script>

<style scoped>
.password-strength {
    font-weight: bold;
}

.password-strength-meter {
    height: 10px;
    background-color: #ccc;
    border-radius: 5px;
    margin-top: 10px;
    overflow: hidden;
}

.password-strength-bar {
    height: 100%;
    background-color: #4CAF50;
    width: 0;
    transition: width 0.3s;
}

</style>