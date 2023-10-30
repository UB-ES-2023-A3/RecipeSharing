<template>
    <header class="app-header">
        <div class="image-container">
            <img class="button-image-logo" @click="handleLogoClick" src="../assets/images/Logo.png" alt="Botón">
            <img class="image" :src="imageUrl" alt="Imagen">
            <!-- Utiliza la directiva v-if para mostrar el botón de usuario solo si el usuario está logged -->
            <AppHeaderUserButton :logged="logged" :username="username" :email="email" :password="password"/>
            <div class="text-overlay">
                <p class="animated-title">{{ title }}</p>
            </div>
        </div>
    </header>
</template>

<script>

import AppHeaderUserButton from "@/components/AppHeaderUserButton.vue";

export default {
    props: {
        logged: Boolean, // Define la propiedad logged
        username: String,
        email: String,
        password: String,
    },
    components: {
        AppHeaderUserButton,
    },
    data() {
        return {
            title: "Chef's Nook",
            imageUrl: require("../assets/images/HeaderImage.jpg"),
        };
    },
    methods: {
        handleLogoClick() {
            // Lógica para el clic en el logo
            // Puedes utilizar Vue Router para navegar a la página principal:
            this.$router.push('/');
        },
    },
};
</script>


<style scoped>

.app-header {
    width: 100%;
    position: fixed; /* Fija el encabezado en la parte superior de la ventana */
    top: 0; /* Pegado en la parte superior */
    left: 0; /* Pegado a la izquierda */
    right: 0; /* Pegado a la derecha */
    z-index: 999; /* Asegura que esté en la parte superior de otros elementos */
}

.image-container {
    position: relative;
    height: 100px;
}

.image {
    width: 100%; /* Ajusta el ancho de la imagen según tus necesidades */
    height: 100%; /* Ajusta la altura al 100% para mantener la relación de aspecto */
    object-fit: cover; /* La imagen se ajusta al contenedor manteniendo la relación de aspecto */
}

.text-overlay {
    position: absolute;
    top: 0;
    left: 300px; /* Desplazamiento de 200px desde el borde izquierdo */
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}


.text-overlay p {
    color: #fff; /* Color del texto */
    font-style: oblique;
    font-size: 1cm;
    text-align: center; /* Alinea el texto horizontalmente en el centro */

}

.animated-title {
    color: #fff;
    font-size: 24px;
    animation: bounce 10s infinite; /* Nombre de la animación, duración y repetición */
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-20px);
    }
    60% {
        transform: translateY(-10px);
    }
}

.button-image-user {
    position: absolute;
    top: 0;
    right: 0;
    width: 70px;
    margin-top: 12px;
    margin-right: 20px;
    border-radius: 50%;
}

.button-image-logo {
    position: absolute;
    top: 0;
    left: 0; /* Cambia "right" a "left" para posicionar a la izquierda */
    width: 70px;
    margin-top: 12px;
    margin-left: 20px; /* Ajusta el margen izquierdo */
    border-radius: 50%;
}
</style>