<template>
    <div class="button-image-user">
        <div @click="toggleMenu" class="button-image-user">
            <img :src="userImage" alt="Button" class="user-image"/>
        </div>
        <!-- Use v-if to show the menu when isMenuOpen is true -->
        <div v-if="logged && isMenuOpen" class="user-menu">
            <ul>
                <li @click="goToProfile">My Profile</li>
                <li @click="logout">Log Out</li>
            </ul>
        </div>
        <div v-if="!logged && isMenuOpen" class="user-menu">
            <ul>
                <li @click="goToLogin">Log In</li>
            </ul>
        </div>
    </div>
</template>

<script>

import axios from "axios";

export default {
    props: {
        logged: Boolean, // Define the logged property
        username: String,
        email: String,
        password: String,
    },
    data() {
        return {
            isMenuOpen: false, // Controls the visibility of the user menu
            name: "AppHeaderUserButton",
            userImage: require("../assets/images/DefaultUser.jpg"), // User image path
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen; // Toggles the user menu
        },
        goToLogin() {
            this.$router.push('/login'); // Navigate to the login page
        },
        goToProfile() {
            // Add logic to navigate to the user's profile page if needed
            // Example: this.$router.push('/profile');
        },
        async logout() {
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
                    // Successful login, redirect the user or perform other necessary actions
                }
            } catch (error) {
                if (error.response) {
                    // Handle login failure (e.g., display an error message).
                    if (error.response.status === 400) {
                        alert(error.response.data.error);
                        localStorage.setItem('logged', false);
                        localStorage.setItem('username', null);
                        localStorage.setItem('email', null);
                        localStorage.setItem('password', null);
                        window.location.reload();
                    } else if (error.response.status === 500) {
                        alert("An error occurred while logging in.");
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
    },
};

</script>

<style scoped>

.button-image-user {
    height: 100%;
    width: 100%;
    margin-top: 5px;
    margin-right: 20px;
    border-radius: 50%;
}

.user-image {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 10px;
}

.user-menu {
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 100px;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

li {
    padding: 10px;
    cursor: pointer;
}

li:hover {
    background-color: #f0f0f0;
}

</style>