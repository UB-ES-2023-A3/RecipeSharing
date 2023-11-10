<template>
  <div v-if="!is_showing_cart">
    <div id="container">
      <div id="header">
        <h1 id="title">SPORT MATCHES</h1>
        <h3 v-show="logged" class="profile">
          🙎‍♂️ {{ username }}
          {{ money_available.toFixed(2) }}
        </h3>
        <button @click="changeView">Veure cistella <span class="cart-count"> {{ matches_added.length }} </span></button>
        <button v-if="logged" class="btn btn-outline-success btn-md r-margin" @click="logOut"> Sign Out </button>
        <button v-else class="btn btn-outline-primary btn-md r-margin" @click="goLogin"> Sign In </button>
      </div>
      <div id="container_card">
        <div class="card" v-for="(match) in matches" :key="match.id">
          <img class="card-img-top" :src="match.image" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ match.competition.sport }} - {{ match.competition.category }}</h5>
            <h6>{{ match.competition.name }}</h6>
            <h6><strong>{{ match.local.name }}</strong> ({{ match.local.country }}) vs <strong>{{ match.visitor.name }}</strong> ({{ match.visitor.country }})</h6>
            <h6>{{ match.date.substring(0, 10) }}</h6>
            <h6>{{ match.price }} &euro;</h6>
            <h6>Entrades disponibles: {{ match.total_available_tickets }}</h6>
            <button type="button" class="btn btn-success" @click="addEventToCart(match)">Afegeix a la cistella
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="matches_added.length === 0 && is_showing_cart">
    <div id="container">
      <div id="header">
        <h1 id="title">SPORT MATCHES</h1>
        <h3 v-show="logged" class="profile">
          🙎‍♂️ {{ username }}
          {{ money_available.toFixed(2) }}
        </h3>
        <button type="button" @click="changeView">Tanca la cistella</button>
        <button v-if="logged" class="btn btn-outline-success btn-md r-margin" @click="logOut"> Sign Out </button>
        <button v-else class="btn btn-outline-primary btn-md r-margin" @click="goLogin"> Sign In </button>
      </div>
      <div id="container_cart">
        <div class="cart-title">
          <h3>CART</h3>
          <h5>Your cart is currently empty</h5>
        </div>
        <div>
          <button type="button" @click="changeView">Enrere</button>
          <button type="button" class="btn mx-2" @click="finalizePurchase()" :disabled="true">Finalitzar Compra</button>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div id="container">
      <div id="header">
        <h1 id="title">SPORT MATCHES</h1>
        <h3 v-show="logged" class="profile">
          🙎‍♂️ {{ username }}
          {{ money_available.toFixed(2) }}
        </h3>
        <button type="button" @click="changeView">Tanca cistella</button>
        <button v-if="logged" class="btn btn-outline-success btn-md r-margin" @click="logOut"> Sign Out </button>
        <button v-else class="btn btn-outline-primary btn-md r-margin" @click="goLogin"> Sign In </button>
      </div>
      <div id="container_cart">
        <div class="cart-title">
          <h3>CART</h3>
        </div>
        <table>
          <thead>
          <tr>
            <th>Sport</th>
            <th>Competition</th>
            <th>Match</th>
            <th>Quantity</th>
            <th>Price(&euro;)</th>
            <th>Total(&euro;)</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(addedMatch, index) in matches_added" :key="index">
            <td>{{ addedMatch.match.competition.sport }}</td>
            <td>{{ addedMatch.match.competition.name }}</td>
            <td>{{ addedMatch.match.local.name + ' vs ' + addedMatch.match.visitor.name }}</td>
            <td>
              <div class="quantity-container">
                <span class="quantity">{{ addedMatch.quantity }}</span>
                <button type="button" class="btn-table increment-btn" @click="incrementQuantity(addedMatch)">+</button>
                <button type="button" class="btn-table decrement-btn" @click="decrementQuantity(addedMatch)" :disabled="addedMatch.quantity === '1'">-</button>
              </div>
            </td>
            <td>{{ addedMatch.match.price }}</td>
            <td>{{ (addedMatch.match.price * addedMatch.quantity).toFixed(2) }}</td>
            <td>
              <button type="button" class="btn" @click="removeMatch(addedMatch)">Eliminar Entrada</button>
            </td>
          </tr>
          </tbody>
        </table>
        <div>
          <button type="button" @click="changeView">Enrere</button>
          <button type="button" class="btn-success mx-2" @click="finalizePurchase()">Finalitzar Compra</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      is_showing_cart: false,
      matches: [],
      matches_added: [],
      logged: false,
      money_available: 0,
      username: null,
      // token: null,
      is_admin: 0
    }
  },
  methods: {
    changeView () {
      this.is_showing_cart = !this.is_showing_cart
    },
    goLogin () {
      this.$router.replace({ path: '/userlogin' })
    },
    logOut () {
      this.logged = false
      this.$router.replace({ path: '/' })
      location.reload()
    },
    addEventToCart (match) {
      var found = false
      const newEvent = {
        match,
        quantity: '1'
      }
      for (let i = 0; i < this.matches_added.length; i++) {
        if (this.matches_added[i].match.id === newEvent.match.id) {
          found = true
        }
      }
      if (found === false) {
        this.matches_added.push(newEvent)
      }
    },

    getMatches () {
      const pathMatches = 'http://localhost:8000/matches/'
      const pathCompetition = 'http://localhost:8000/competitions/'

      axios.get(pathMatches)
        .then((res) => {
          var matches = res.data.filter((match) => {
            return match.competition.id != null
          })
          var promises = []
          for (let i = 0; i < matches.length; i++) {
            const promise = axios.get(pathCompetition + matches[i].competition.id)
              .then((resCompetition) => {
                delete matches[i].competition.id
                matches[i].competition = {
                  'name': resCompetition.data.name,
                  'category': resCompetition.data.category,
                  'sport': resCompetition.data.sport
                }
              })
              .catch((error) => {
                console.error(error)
              })
            promises.push(promise)
          }
          Promise.all(promises).then((_) => {
            this.matches = matches
          })
        })
        .catch((error) => {
          console.error(error)
        })
    },

    incrementQuantity (addedMatch) {
      const valor = parseInt(addedMatch.quantity) + 1
      addedMatch.quantity = valor.toString()
    },

    decrementQuantity (addedMatch) {
      if (parseInt(addedMatch.quantity) > 1) {
        const valor = parseInt(addedMatch.quantity) - 1
        addedMatch.quantity = valor.toString()
      }
    },

    removeMatch (addedMatch) {
      var index = this.matches_added.indexOf(addedMatch)
      if (index !== -1) {
        this.matches_added.splice(index, 1)
      }
    },

    finalizePurchase () {
      if (!this.logged) {
        this.goLogin()
      } else {
        for (let i = 0; i < this.matches_added.length; i++) {
          const parameters = {
            match_id: parseInt(this.matches_added[i].match.id),
            tickets_bought: parseInt(this.matches_added[i].quantity)
          }
          this.addPurchase(parameters)
        }
      }
    },

    addPurchase (parameters) {
      const path = `http://localhost:8000/orders/${this.username}`
      axios.post(path, parameters, {auth: {username: this.token}})
        .then(() => {
          console.log('Order done')
          this.matches_added = []
          this.getAccount()
          this.getMatches()
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error)
        })
    },

    getAccount () {
      if (this.logged) {
        const path = `http://localhost:8000/accounts/${this.username}`
        axios.get(path)
          .then((resAccount) => {
            this.is_admin = resAccount.data.is_admin
            this.money_available = resAccount.data.available_money
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  },

  created () {
    this.getMatches()
    this.username = this.$route.query.username
    alert(this.username)
    if (this.$route.query.logged === undefined) {
      this.logged = false
    } else {
      this.logged = this.$route.query.logged
    }
    this.token = this.$route.query.token
    this.getAccount()
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

#header button {
  background-color: transparent;
  color: rgb(12, 43, 1);
  padding: 8px 16px;
  border: 1px solid rgb(12, 43, 1);
  cursor: pointer;
  margin-right: 10px;
  border-radius: 4px;
}

#header > #title {
  font-size: 44px;
  color: white;
  text-align: center;
  margin-right: 5cm;
}

#container_card {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 20px;
  background-color: rgb(180, 235, 162);
}

#container_cart {
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
  justify-content: center;
  flex-direction: column;
}

#container_cart button {
  background-color: gray;
  width: 200px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  margin: 0 10px;
}

#container_cart button:disabled {
  background-color: rgb(26, 216, 26);
  cursor: not-allowed;
}

.cart-title {
  text-align: center;
  margin-bottom: 20px;
}

.card {
  width: 300px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  text-align: center;
}

#container_cart table {
  width: 100%;
  border-collapse: collapse;
  align-items: center;
  margin-bottom: 20px;
}

#container_cart th,
td {
  padding: 8px;
  border-bottom: 1px solid #ddd;
  background-color: white;
  text-align: center;
  font-size: 16px;
}

#container_cart th {
  background-color: rgb(65, 128, 43);
  text-align: center;
  font-size: 20px;
}

#container_cart .btn {
  font-weight: bold;
  align-items: center;
  color: white;
  background-color: red;
}

#container_cart .increment-btn {
  font-size: 20px;
  font-weight: bold;
  width: 40px;
  height: 40px;
  align-items: center;
  color: white;
  background-color: green;
}

#container_cart .decrement-btn {
  font-size: 20px;
  font-weight: bold;
  width: 40px;
  height: 40px;
  align-items: center;
  color: white;
  background-color: red;
}

#container_cart .decrement-btn:disabled {
  background-color: rgb(247, 101, 101);
  cursor: not-allowed;
}

#container_cart .btn-success{
  background-color: green;
  width: 200px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  margin: 0 10px;
}

</style>
