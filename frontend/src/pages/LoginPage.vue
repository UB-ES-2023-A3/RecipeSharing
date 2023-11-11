<template>
  <div class="mainContainer" style="color: black">
    <div class="form-background">
      <div class="mainTitle">
        <!-- Main title for the login page with custom color -->
        <h1 style="color: #ff5733">Login</h1>
      </div>
      <form @submit.prevent="login" class="form">
        <div class="form-group">
          <label for="usernameOrEmail">Username or Email:</label>
          <!-- AppTextField component for username or email input -->
          <AppTextField
            :defaultMessage="defaultMessageUsernameOrEmail"
            @update:textValue="usernameOrEmail = $event"
          />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <!-- AppTextFieldPassword component for password input -->
          <AppTextFieldPassword
            :defaultMessage="defaultMessagePassword"
            @update:textValue="password = $event"
          />
        </div>
        <p>
          <!-- Router link to navigate to the registration page if the user doesn't have an account -->
          <router-link to="/register">Don't have an account? Register here</router-link>
        </p>
        <div class="secondaryContainer" style="background-color: white">
          <!-- Login button to submit the form -->
          <button type="submit" class="submit-button">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import '../assets/styles/appStyles.css'
import AppTextField from '@/components/AppTextField.vue'
import axios from 'axios'
import AppTextFieldPassword from '@/components/AppTextFieldPassword.vue'

export default {
  name: 'LoginPage',
  components: {AppTextFieldPassword, AppTextField},
  data () {
    return {
      // Data properties for username, email, password, and more
      usernameOrEmail: '',
      password: '',
      username: '',
      email: '',
      defaultMessageUsernameOrEmail: 'Enter your username or email',
      defaultMessagePassword: 'Enter your password',
      logged: false // A flag to indicate if the user is logged in
    }
  },
  methods: {
    async login () {
      const formData = new FormData()
      formData.append('username', this.usernameOrEmail)
      formData.append('password', this.password)

      const path = 'http://localhost:8000/login'

      axios.post(path, formData)
        .then((res) => {
          this.logged = true
          this.token = res.data.access_token
          this.$router.push({
            path: '/',
            query: {
              username: this.username,
              logged: this.logged,
              token: this.token
            }
          })
        })
        .catch((error) => {
          console.error(error)
          alert('Username or Password incorrect')
        })
    }
  }

}

</script>

<style scoped>

</style>
