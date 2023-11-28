<template>
  <div class="mainContainer">
    <h1>Ingredients List A-Z</h1>

    <!-- Botones de letras -->
    <div class="letrasButtons">
      <a
        v-for="letra in letras"
        :key="letra"
        :href="letra"
        @click.prevent="scrollToSection(letra)"
        :class="{ 'letraNoDisponible': !letraDisponible(letra), 'letraSeleccionada': letra === letraSeleccionada }"
      >
        {{ letra }}
      </a>
    </div>

    <div v-if="Object.keys(ingredientsData).length">
      <div v-for="(ingredientes, letra) in ingredientsData" :key="letra">
        <div class="IngredientsSection" :id="letra" :class="{ 'resaltado': letra === letraSeleccionada }">
          <div class="tituloSeccion centrado">{{ letra }}</div>
          <div class="ingredientesList">
            <button
              v-for="ingrediente in ingredientes"
              :key="ingrediente"
              @click="handleButtonClick(ingrediente)"
              class="botonIngrediente"
            >
              {{ ingrediente }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>No hay ingredientes disponibles.</p>
    </div>
  </div>
</template>

<script>
import ingredientsData from "@/assets/lists/Ingredients.json";

export default {
  data() {
    return {
      ingredientsData: ingredientsData,
      letras: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''),
      letraSeleccionada: null,
    };
  },
  methods: {
    handleButtonClick(ingrediente) {
      // Manejar el clic en el botón del ingrediente, por ejemplo, podrías mostrar más detalles
      alert(`Haz clic en ${ingrediente}`);
    },
    scrollToSection(letra) {
      this.letraSeleccionada = letra;
      const elemento = document.getElementById(letra);
      if (elemento) {
        const offset = 120; // Separación del margen superior
        const posicion = elemento.offsetTop - offset;
        window.scrollTo({ top: posicion, behavior: 'smooth' });
      }
    },
    letraDisponible(letra) {
      return Object.keys(this.ingredientsData).includes(letra);
    },
  },
};
</script>

<style scoped>
body, html {
  margin: 0;
  padding: 0;
}

.mainContainer {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 120px;
  color: black;
  background: white;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.letrasButtons a {
  text-decoration: none;
  color: black;
  background-color: #83d3fc;
  padding: 5px 10px;
  border-radius: 2px;
  cursor: pointer;
  margin: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;
}

.letrasButtons a:hover {
  background-color: #055480;
}

.letrasButtons a.letraNoDisponible {
  color: #666;
  cursor: not-allowed;
}

.letrasButtons a.letraSeleccionada {
  background-color: #ff5733;
}

.IngredientsSection {
  transition: background-color 0.3s ease;
  margin-top: 40px;
  justify-content: center;

}

.IngredientsSection.resaltado {
  background-color: #ffffff;
  margin-right: 20px;
  margin-left: 20px;
  padding: 10px;
  border: 2px solid #83d3fc;
}


.tituloSeccion {
  text-align: center;
  font-size: larger;
  background-color: #83d3fc;
  width: 25%;
  margin: 0 auto; /* Añadido para centrar horizontalmente */
  padding: 5px;
    margin-top: 20px;
}


.ingredientesList {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 20px;
  margin-right: 20px;
  margin-left: 20px;
}

.botonIngrediente {
  margin: 5px;
  padding: 10px;
  cursor: pointer;
  background-color: white;
  color: black;
  border-top: 1px solid black;
  border: none;
  border-radius: 0;
  transition: background-color 0.3s ease;
  flex: 0 0 calc(33.33% - 10px);
}

.botonIngrediente:hover {
  background-color: #83d3fc;
}
</style>