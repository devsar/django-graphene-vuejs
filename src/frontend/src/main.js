import Vue from 'vue'
import App from './App.vue'
import { ApolloClient } from 'apollo-boost'
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

// Install the vue plugin
Vue.use(VueApollo)

const link = createHttpLink({
  uri: 'http://localhost:8000/graphql/',
  credentials: 'include'
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

// Apollo provider init
const apolloProvider = new VueApollo({
  defaultClient: client 
})

// Start the app
new Vue({
  el: '#app',
  apolloProvider,
  render: h => h(App)
})