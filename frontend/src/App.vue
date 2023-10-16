<template>
  <div>
    <AppHeader /> 
    <router-view/> 
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader // Registra el componente del encabezado
  }
}
</script>