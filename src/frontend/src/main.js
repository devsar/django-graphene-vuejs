import Vue from 'vue'
import App from './App.vue'
import Cookies from 'js-cookie'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

// Install the vue plugin
Vue.use(VueApollo)

// apollo client setup
const csrftoken = Cookies.get('csrftoken')
const httpLink = new HttpLink({
  uri: 'http://localhost:8000/graphql/',
  headers: {
    "X-CSRFToken": csrftoken
  }
})
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

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