<template>
  <div v-if="creatingAccount">
    <div id="container">
      <div id="header">
        <div id="title">SPORT MATCHES</div>
      </div>
      <div id="container_login">
        <h2 class="login-title">Create Account</h2>
        <b-form>
          <b-form-group label="Username" label-for="inputNewUsername">
            <b-form-input id="inputNewUsername" placeholder="Username" v-model="addUserForm.username" required autofocus></b-form-input>
          </b-form-group>
          <b-form-group label="Password" label-for="inputNewPassword">
            <b-form-input type="password" id="inputNewPassword" placeholder="Password" v-model="addUserForm.password" required></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary" class="btn-login d-block" @click="createAccount">Create Account</b-button>
          <b-button variant="secondary" class="btn-back d-block" @click="goLogin">Back to Log in</b-button>
        </b-form>
      </div>
    </div>
  </div>
  <div v-else>
    <div id="container">
      <div id="header">
        <div id="title">SPORT MATCHES</div>
      </div>
      <div id="container_login">
        <h2 class="login-title">Sign in</h2>
        <b-form>
          <b-form-group label="Username" label-for="inputUsername">
            <b-form-input id="inputUsername" placeholder="Username" v-model="username" required autofocus></b-form-input>
          </b-form-group>
          <b-form-group label="Password" label-for="inputPassword">
            <b-form-input type="password" id="inputPassword" placeholder="Password" v-model="password" required></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary" class="btn-login d-block" @click="checkLogin">Log in</b-button>
          <b-button variant="success" class="btn-create d-block" @click="initCreateForm">Create Account</b-button>
          <b-button variant="secondary" class="btn-back d-block" @click="goMatches">Back to Matches</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      logged: false,
      username: null,
      password: null,
      token: null,
      creatingAccount: false,
      addUserForm: {
        username: null,
        password: null
      }
    }
  },
  methods: {
    checkLogin () {
      const formData = new FormData()
      formData.append('username', this.username)
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
    },

    createAccount () {
      const parameters = {
        username: this.addUserForm.username,
        password: this.addUserForm.password,
        is_admin: 0,
        available_money: 200.5
      }
      alert('Creating account')
      const url = 'http://localhost:8000/accounts'
      axios
        .post(url, parameters)
        .then((res) => {
          alert('ACC')
          this.logged = true
          this.token = res.data.token_access
          this.goLogin()
        })
        .catch((error) => {
          console.error(error)
          alert('Account already exists')
        })
    },
    goLogin () {
      this.creatingAccount = false
      this.username = null
      this.password = null
    },
    initCreateForm () {
      this.creatingAccount = true
      this.addUserForm.username = null
      this.addUserForm.password = null
    },
    goMatches () {
      this.$router.replace({ path: '/' })
    }
  }
}
</script>

<style scoped>
body {
  background-color: rgb(180, 235, 162);
  margin: 0;
  padding: 0;
}

#container {
  background-color: rgb(180, 235, 162);
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

#header {
  background-color: rgb(136, 201, 115);
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: white;
  font-size: 24px;
  border-bottom: 1px solid black;
}

#header > #title {
  font-size: 44px;
  color: white;
  text-align: center;
  margin-right: 5cm;
}

#container_login {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  border-radius: 4px;
  align-items: center;
  flex-direction: column;
}

.login-title {
  text-align: center;
  margin-bottom: 20px;
}

.btn-login {
  background-color: blue;
  width: 200px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  margin: 10px 10px 0;
}

.btn-create {
  background-color: green;
  width: 200px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  margin: 10px 10px 0;
}

.btn-back {
  background-color: gray;
  width: 200px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  margin: 10px 10px 0;
}
</style>
