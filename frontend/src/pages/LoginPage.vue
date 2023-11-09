<template>
    <div class="mainContainer" style="color: black">
        <div class="form-background">
            <div class="mainTitle">
                <!-- Main title for the login page with custom color -->
                <h1 style="color: #ff5733">Login</h1>
            </div>
            <form @submit.prevent="login" class="form">
                <div class="form-group">
                    <label for="usernameOrEmail">Username or Email:</label>
                    <!-- AppTextField component for username or email input -->
                    <AppTextField
                            :defaultMessage="defaultMessageUsernameOrEmail"
                            @update:textValue="usernameOrEmail = $event"
                    />
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <!-- AppTextFieldPassword component for password input -->
                    <AppTextFieldPassword
                            :defaultMessage="defaultMessagePassword"
                            @update:textValue="password = $event"
                    />
                </div>
                <p>
                    <!-- Router link to navigate to the registration page if the user doesn't have an account -->
                    <router-link to="/register">Don't have an account? Register here</router-link>
                </p>
                <div class="secondaryContainer" style="background-color: white">
                    <!-- Login button to submit the form -->
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
import AppTextFieldPassword from "@/components/AppTextFieldPassword.vue"

export default {
    name: "LoginPage",
    components: {AppTextFieldPassword, AppTextField},
    data() {
        return {
            // Data properties for username, email, password, and more
            usernameOrEmail: "",
            password: "",
            username: "",
            email: "",
            defaultMessageUsernameOrEmail: "Enter your username or email",
            defaultMessagePassword: "Enter your password",
            logged: false, // A flag to indicate if the user is logged in
        };
    },
    methods: {
        async login() {
            // Determine if the input is an email or username
            if (this.usernameOrEmail === 0 || this.password.length === 0) {
                alert("Complete the form");
                return;
            }
            let loginIdentifier = this.usernameOrEmail;
            if (loginIdentifier.match(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
                // If it matches the email format, set it as an email
                this.email = loginIdentifier;
            } else {
                // Otherwise, set it as a username
                this.username = loginIdentifier;
            }

            try {
                let response = await axios.post('/login/', {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (response.status === 200) {
                    // Successful login, perform necessary actions
                    alert("Logged!") // Display a success message
                    this.logged = true; // Set the logged flag to true
                    localStorage.setItem('logged', this.logged); // Store the logged status in local storage
                    localStorage.setItem('username', this.username);
                    this.$emit('login-success', this.logged); // Emit a custom event indicating login success
                    this.$emit('username-success', this.username);
                    this.$emit('email-success', this.email);
                    this.$emit('password-success', this.password);
                    this.$router.push('/'); // Redirect to the home page
                }
            } catch (error) {
                if (error.response) {
                    // Handle login failure (e.g., display an error message).
                    if (error.response.status === 400) {
                        alert(error.response.data.error);
                    } else if (error.response.status === 500) {
                        alert("An error occurred while registering.");
                    } else {
                        // Handle other status codes
                        alert("Unexpected error");
                    }
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
