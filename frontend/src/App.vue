<template>
  <div>
    <!-- Encabezado específico para las páginas "LoginPage" y "RegisterPage" -->
    <AppHeaderIni v-if="$route.name === 'register' || $route.name === 'login'" />
    <!-- Encabezado común en todas las páginas -->
    <AppHeader v-else />
    <router-view/>
  </div>
</template>



<script>
import AppHeader from './components/AppHeader.vue';
import AppHeaderIni from './components/AppHeaderIni.vue';

export default {
    components: {
        AppHeader, // Registra el componente del encabezado
        AppHeaderIni
    }
}
</script>