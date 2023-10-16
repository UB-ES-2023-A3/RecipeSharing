<template>
  <div class="mainContainer">
    <div class="secondaryContainer">
      <div class="titleContainer">
        <div class="mainTitle">
          <h1> MOST LIKED RECIPES</h1>
        </div>
      </div>
    </div>
    <div class="secondaryContainer">
      <div class="titleContainer">
        <div class="mainTitle">
          <h1> MOST LIKED RECIPES</h1>
        </div>
      </div>
    </div>
    <div class="floating-button" title="Upload a new recipe">
      <i class="fas fa-plus"></i>
    </div>
  </div>
</template>

<script>
import '../assets/styles/appStyles.css';

export default {
  name: "HomePage.vue",
  components: {},
};
</script>

<style scoped>

.floating-button {
  /* Estilos para el botón flotante */
  position: absolute;
  bottom: 20px; /* Margen inferior deseado */
  right: 20px; /* Margen derecho deseado */
  background-color: #db1818; /* Fondo del botón */
  color: white; /* Color del icono y del texto */
  border: none;
  border-radius: 50%; /* Forma circular */
  width: 50px; /* Tamaño del botón */
  height: 50px;
  text-align: center;
  display: flex; /* Activa el modelo de caja flexible para centrar verticalmente el contenido */
  align-items: center; /* Centra verticalmente el contenido */
  justify-content: center; /* Centra horizontalmente el contenido */
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Sombra suave */
  /* Agrega otros estilos según tus necesidades */
}

.floating-button:hover::before {
  content: attr(title);
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  background: red;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  display: block;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}
</style>
