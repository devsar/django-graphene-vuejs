<template>
  <div id="app">
    <div class="App-header">
      <h3>Welcome to Django + Django Graphene + Vue Apollo minimal boilerplate</h3>
      <template v-if="loading > 0">
        <div class="flex w-100 h-100 items-center justify-center pt7">
          <div>Loading...</div>
        </div>
      </template>
      <template v-if="users">
        <hr />
        <input type="text" name="username" id="username" v-model="username" placeholder="username">
        <input type="text" name="password" id="password" v-model="password" placeholder="password">
        <input type="button" value="Login" @click="login"/>
        <input type="button" value="My info" @click="me"/>
      </template>
      <template v-if="token">
        <p>Token is: {{ token }}</p>
      </template>
      <template v-if="token">
        <div>
          <h3>Logged as: {{ this.username }}</h3>
          <p>Email: {{ this.email }}</p>
        </div>
      </template>
      <template v-else>
        <template v-if="error">
          <div class="flex w-100 h-100 items-center justify-center pt7">
            <div>An unexpected error occurred: {{ error }} </div>
          </div>
        </template>
      </template>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
  import gql from 'graphql-tag'

  const LOGIN_QUERY = gql(`
    mutation ($username: String!, $password: String!) {
      tokenAuth(username:$username, password:$password){
        token
      }
    }
  `)

  export default {
    name: 'app',

    // data props to component
    data: () => ({
      hello: '',
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      token: '',
      loading: 0,
      error: '',
      users: [],
    }),

    methods: {

      async login () {
        var result
        var token

        try {
          result = await this.$apollo.mutate({
            mutation: LOGIN_QUERY,
            variables: {
              username: this.username,
              password: this.password
            }
          })
        } catch (error) {
          this.token = ''
          this.email = ''
          alert(error)
          return
        } 

        token = result.data.tokenAuth.token
        this.token = token
      },

      async me () {
        var result

        try {
          result = await this.$apollo.query({
            query: gql(`
              query {
                me {
                  email
                }
              }
            `)
          })
        } catch (error) {
          alert(error)
          return
        }
        this.email = result.data.me.email
      }

    },

  }
</script>

<style>

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.App {
  text-align: center;
}

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
}

.App-header {
  background-color: white;
  height: 250px;
  padding: 20px;
  color:black;
}

.App-title {
  font-size: 1.5em;
}

.App-intro {
  font-size: large;
  text-align: 'center';
}

h3 {
  text-align: center;
  padding:10px;
}

@keyframes App-logo-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}


</style>
