<template>
  <div id="app" class="pure-g">
    <div class="App-header pure-u-1">
      <h1>Welcome to Django + Django Graphene + Vue Apollo minimal boilerplate</h1>
        <hr />
        <h2>Login</h2>
        <form class="pure-form pure-form-aligned">
          <fieldset>
            <input type="text" name="username" id="username" v-model="username" placeholder="username">
            <input type="text" name="password" id="password" v-model="password" placeholder="password">
            <input type="button" class="pure-button pure-button-primary" value="Login" @click="login"/>
          </fieldset>
        </form>
        <p v-if="token">JWT Token is: {{ token }}</p>
        <p v-if="token">The token is saved in a httpOnly cookie, check that in the chrome developer tools (tab Application -> Cookies)</p>
        <hr />
        <h2>Get a token to fetch the following values</h2>
        <p>Email: {{ me.email }}</p>
        <p>My First Name: {{ me.firstName }}</p>
        <p>My Last Name: {{ me.lastName }}</p>
        <p>My ID: {{ me.id }}</p>
        <hr />
        <h2>Update user values on DB</h2>
        <p>Apollo client will send the mutation (update the DB) and update its cache (that will update user info above):</p>
        <form class="pure-form">
          <fieldset>
            <input type="text" name="newname" id="newname" v-model="form.name" placeholder="My new name">
            <input type="text" name="newlastname" id="newlastname" v-model="form.lastname" placeholder="My new last name">
            <input type="text" name="newemail" id="newemail" v-model="form.email" placeholder="My new email">
            <input type="button" class="pure-button pure-button-primary" value="Update user info" @click="updateUser"/>
          </fieldset>
        </form>
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

  const UPDATE_USER = gql(`
    mutation ($firstname: String, $lastname: String, $email: String) {
      updateUser(firstName:$firstname, lastName:$lastname, email:$email){
        user {
          id
          firstName
          lastName
          email
        }
      }
    }
  `)

  export default {
    name: 'app',

    // data props to component
    data: () => ({
      username: '',
      password: '',
      token: '',
      form: {
        name: '',
        lastanme: '',
        email: ''
      },
      me: {
        firstname: '',
        lastName: '',
        email: '',
        id: '',
      }
    }),

    apollo: {
      me: {
        query: gql(`
          query {
            me {
              id
              firstName 
              lastName
              email
            }
          }
        `),
        // Disable the query
        skip () {
          return !this.token
        },
      }
    },

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

      async updateUser () {

        try {
          await this.$apollo.mutate({
            mutation: UPDATE_USER, 
            variables: {
              firstname: this.form.name || this.me.firstname,
              lastname: this.form.lastname || this.me.lastname,
              email: this.form.email || this.me.email
            }
          })
        } catch (error) {
          alert(error)
          return
        } 
      },

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
