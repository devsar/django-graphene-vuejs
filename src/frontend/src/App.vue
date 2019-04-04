<template>
  <div id="app">
    <div class="App-header">
      <h2>Welcome to React + GraphQL + Apollo minimal boilerplate</h2>
    </div>
    <p>Here in the <b>master</b> branch you will find a minimal <b>vuejs+apollo</b> project 
    from where you can start working on. 
    Be sure to setup the correct graphql API endpoint at <b>main.js</b></p>
    <p>Below you will find a list of branches with examples that maybe will be useful for you
    as a reference.</p>
    <h2>List of Branches</h2>
    <h3>jwt-auth</h3>
    <p>Use this branch to see an example of using <b>VueJS + Apollo</b> 
    consuming the backend and using <b>JWT</b> to access API resources
    where the user must be authenticated</p>
  </div>
</template>

<script>
  import gql from 'graphql-tag'

  export default {
    name: 'app',

    // data props to component
    data: () => ({
    }),

    // Apollo GraphQL
    apollo: {
    }
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
  background-color: #222;
  height: 125px;
  padding: 20px;
  color: white;
}

.App-title {
  font-size: 1.5em;
  margin-left: 20px;
}

.App-intro {
  font-size: large;
  text-align: 'center';
}

h3, h2, p {
  text-align: center;
  padding:10px;
}

@keyframes App-logo-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}


</style>
