<template>
    <div class="mainContainer" style="color: black">
        <div class="form-background">
            <div class="mainTitle" style="color: #ff5733">
                <!-- Title for the registration form with custom color -->
                <h1>Register</h1>
            </div>
            <form @submit.prevent="register" class="form">
                <div class="form-group">
                    <label for="username">Username:</label>
                    <!-- AppTextField component for username input -->
                    <AppTextField
                            :defaultMessage="defaultMessageUsername"
                            @update:textValue="username = $event"
                            @input="checkUsername"
                    />
                    <div class="note">
                        <p>The username must be between 8 and 16 characters.</p>
                    </div>
                    <p v-if="usernameError" class="error">This username is not valid</p>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <!-- AppTextField component for email input -->
                    <AppTextField
                            :defaultMessage="defaultMessageEmail"
                            @update:textValue="email = $event"
                            @input="checkEmail"
                    />
                    <div class="note">
                        <p>Only the following domains are valid: example.com, yourdomain.com, gmail.com, hotmail.com</p>
                    </div>
                    <p v-if="emailError" class="error">This email extension is not valid</p>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <!-- AppTextFieldPassword component for password input -->
                    <AppTextFieldPassword
                            :defaultMessage="defaultMessagePassword"
                            @update:textValue="password = $event"
                            @input="checkPassword"
                    />
                    <div class="note">
                        <p>The password must be at least 8 characters long, contain one uppercase letter, one lowercase
                            letter, one number, and one symbol.</p>
                    </div>
                    <p v-if="passwordError" class="error">This password is not valid</p>
                </div>
                <div class="form-group">
                    <label for="confirmPassword">Confirm Password:</label>
                    <!-- AppTextFieldPassword component for password confirmation input -->
                    <AppTextFieldPassword
                            :defaultMessage="defaultMessagePasswordCheck"
                            @update:textValue="confirmPassword = $event"
                    />
                </div>
                <div class="password-strength">
                    Password Strength:
                    <div class="password-strength-meter">
                        <div class="password-strength-bar" :style="{ width: passwordStrength + '%' }"></div>
                    </div>
                </div>
                <p>
                    <!-- Router link to navigate to the login page if the user already has an account -->
                    <router-link to="/login">Already have an account? Log in</router-link>
                </p>
                <div class="secondaryContainer" style="background-color: white">
                    <!-- Register button to submit the form -->
                    <button type="submit" class="submit-button">Register</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import '../assets/styles/appStyles.css';
import AppTextField from "@/components/AppTextField.vue";
import AppTextFieldPassword from "@/components/AppTextFieldPassword.vue";
import axios from 'axios';

export default {
    name: "RegisterPage",
    components: {AppTextField, AppTextFieldPassword},
    data() {
        return {
            // Data properties for username, email, password, and more
            username: "",
            usernameError: false,
            email: "",
            emailError: false,
            password: "",
            passwordError: false,
            confirmPassword: "",
            passwordStrength: 0,
            defaultMessageUsername: "Introduce your username",
            defaultMessageEmail: "Introduce your email",
            defaultMessagePassword: "Introduce your password",
            defaultMessagePasswordCheck: "Introduce your password again",
        };
    },
    methods: {
        checkUsername() {
            this.usernameError = this.username.length < 8 || this.username.length > 16;
        },
        checkEmail() {
            // Check the validity of the entered email
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!emailRegex.test(this.email)) {
                this.emailError = true;
            } else {
                // Define valid email extensions
                const validEmailExtensions = ["example.com", "yourdomain.com", "gmail.com", "hotmail.com"];
                // Split the email to get the domain part
                const emailParts = this.email.split("@");
                const emailExtension = emailParts[1];
                // Check if the email extension is valid
                this.emailError = !validEmailExtensions.includes(emailExtension);
            }
        },
        checkPassword() {
            // Check the validity and strength of the entered password
            const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
            this.passwordError = !passwordRegex.test(this.password);

            // Calculate password strength
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
            this.passwordStrength = (strength / 4) * 100;
        },
        clearForm() {
            this.username = "";
            this.email = "";
            this.password = "";
            this.confirmPassword = "";
        },
        async register() {
            // Check if passwords match
            if (this.username.length === 0 || this.email.length === 0 ||
                this.password.length === 0 || this.confirmPassword.length === 0) {
                alert("Complete the form");
                return;
            }
            if (this.password !== this.confirmPassword) {
                alert("Passwords do not match");
                return;
            }
            try {
                // Send a registration request to the server
                let response = await axios.post('/register/', {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                // Check the HTTP status code in the response
                if (response.status === 200) {
                    // Registration successful, you can handle success here
                    console.log("Registration successful");
                    alert("Registration successful");
                    this.$router.push('/');
                }
            } catch (error) {
                if (error.response) {
                    // Handle network errors
                    if (error.response.status === 400) {
                        // Handle client-side validation errors
                        alert(error.response.data.error);
                    } else if (error.response.status === 500) {
                        // Handle server errors
                        alert("An error occurred while registering.");
                    } else {
                        // Handle other status codes
                        alert("Unexpected error");
                    }
                } else {
                    // Handle other unexpected errors
                    alert("An error occurred while registering.");
                }
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