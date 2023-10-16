<template>
  <div>
    <div class="mainContainer">
      <div class="secondaryContainer">
        <AppHeader/>
      </div>
      <div class="secondaryContainer">
        <div class="titleContainer">
          <div class="mainTitle">
            <h1> MOST LIKED RECIPES</h1>
          </div>
        </div>
        <!-- Otro contenido de tu página -->
        <div class="add-button" title="Upload a new recipe">
          <i class="fas fa-plus"></i> <!-- Icono de "añadir" -->
        </div>
      </div>
      <div class="secondaryContainer">
        <div class="titleContainer">
          <div class="mainTitle">
            <h1>NEWEST RECIPES</h1>
          </div>
        </div>
        <!-- Otro contenido de tu página -->
        <div class="add-button" title="Upload a new recipe">
          <i class="fas fa-plus"></i> <!-- Icono de "añadir" -->
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import AppHeader from '../components/AppHeader.vue';
import '../assets/styles/appStyles.css';

export default {
  name: "HomePage.vue",
  components: {
    AppHeader,
  },
};
</script>

<style scoped>

/* Estilo adicional para mostrar el título */
.add-button:hover::before {
  content: attr(title);
  position: absolute;
  top: -30px; /* Ajusta según tu preferencia */
  left: 50%;
  transform: translateX(-50%);
  background:red; /* Fondo */
  color: white; /* Texto */
  padding: 5px 10px;
  border-radius: 5px;
  display: block;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
  align-items: center;
}



</style>
