<template>
    <div class="mainContainer" style="color: black">
        <div class="form-background">
            <div class="mainTitle">
                <h1 style="color: #ff5733">Login</h1>
            </div>
            <form @submit.prevent="login" class="form">
                <div class="form-group">
                    <label for="usernameOrEmail">Username or Email:</label>
                    <AppTextField
                            :defaultMessage="defaultMessageUsernameOrEmail"
                            @update:textValue="usernameOrEmail = $event"
                    />
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <AppTextField
                            :defaultMessage="defaultMessagePassword"
                            @update:textValue="password = $event"
                    />
                </div>
                <p>
                    <router-link to="/register">Don't have an account? Register here</router-link>
                </p>
                <div class="secondaryContainer" style="background-color: white">
                    <button type="submit" class="submit-button">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import '../assets/styles/appStyles.css';
import AppTextField from "@/components/AppTextField.vue";
import axios from 'axios';

export default {
    name: "LoginPage",
    components: {AppTextField},
    data() {
        return {
            usernameOrEmail: "",
            password: "",
            username: "",
            email: "",
            defaultMessageUsernameOrEmail: "Enter your username or email",
            defaultMessagePassword: "Enter your password"
        };
    },
    methods: {
        async login() {
            // Determine if the input is an email or username
            let loginIdentifier = this.usernameOrEmail;
            if (loginIdentifier.match(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
                // If it matches the email format, set it as an email
                this.email = loginIdentifier;
            } else {
                // Otherwise, set it as a username
                this.username = loginIdentifier;
            }

            try {
                const response = await axios.post('/login/', {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                }, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });

                console.log(response.data);
                alert(response.data)
                if (response.data.message) {
                    // El inicio de sesión fue exitoso, redirigir al usuario o realizar otras acciones necesarias
                } else {
                    // El inicio de sesión falló, mostrar un mensaje de error
                    console.error(response.data.error);
                }
            } catch (error) {
                if (error.response) {
                    // Handle login failure (e.g., display an error message).
                    console.error(error.response.data.error); // You can customize this based on your server's response.
                } else {
                    // Handle other errors.
                    console.error("An error occurred while logging in.");
                }
            }
        },
    }
};
</script>

<style scoped>

</style>