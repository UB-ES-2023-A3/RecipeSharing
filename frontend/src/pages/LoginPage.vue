<template>
  <div class="mainContainer" style="color: black">
    <div class="register-form-background">
      <div class="mainTitle">
        <h1 style="color: #ff5733">Login</h1>
      </div>
      <form @submit.prevent="login" class="register-form">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" class="input" placeholder="Enter your username" />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" class="input" placeholder="Enter your password" />
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

export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      
    }
  }
};
</script>

<style scoped>

</style>