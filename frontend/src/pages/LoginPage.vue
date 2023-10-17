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
        login() {
            const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

            if (emailRegex.test(this.usernameOrEmail)) {
                this.email = this.usernameOrEmail
            } else {
                this.username = this.usernameOrEmail
            }
        }
    }
};
</script>

<style scoped>

</style>