<template>
    <div class="button-image-user">
        <div @click="toggleMenu" class="button-image-user">
            <img :src="userImage" alt="Botón" class="user-image"/>
        </div>
        <!-- Utiliza v-if para mostrar el menú cuando isMenuOpen es verdadero -->
        <div v-if="logged && isMenuOpen" class="user-menu">
            <ul>
                <li @click="goToProfile">Mi perfil</li>
                <li @click="logout">Log out</li>
            </ul>
        </div>
        <div v-if="!logged && isMenuOpen" class="user-menu">
            <ul>
                <li @click="goToLogin">Log in</li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    props: {
        logged: Boolean, // Define la propiedad logged
        username: String,
        email: String,
        password: String,
    },
    data() {
        return {
            isMenuOpen: false,
            name: "AppHeaderUserButton",
            userImage: require("../assets/images/DefaultUser.jpg"), // Ruta de la imagen del usuario
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        goToLogin() {
            this.$router.push('/login');
        },
        goToProfile() {
            // Agrega la lógica para navegar a la página de perfil del usuario
            // Ejemplo: this.$router.push('/perfil');
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
                    // El inicio de sesión fue exitoso, redirigir al usuario o realizar otras acciones necesarias
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
    top: 60px; /* Posición debajo del botón de usuario */
    right: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    width: 100px; /* Ajusta el ancho según tus necesidades */
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
