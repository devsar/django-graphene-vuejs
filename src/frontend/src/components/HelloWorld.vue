<template>
  <div class="hello">

    <h1>{{ msg }}</h1>

    <h2>Connection with API</h2>
    <p>Status: {{ apiStatus }}</p>

    <h2>List of API users</h2>
    <div :key="idx" v-for="(user, idx) in apiUsers">
      <p>{{ user.email }}</p>
      <p>{{ user.username }}</p>
      <p>{{ user.url }}</p>
    </div>

    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      apiStatus: 'NOT CONNECTED',
      apiUsers: []
    }
  },
  methods: {
    fetchAPIUsers: async function () {
      console.log('fetching DRF Users:')
      await api.drf.get('/users/')
        .then((response) => {
          this.apiUsers = response.data
          this.apiStatus = 'Connected'
          console.log('Got API users with success.')
        })
        .catch((error) => console.log('Something went wrong:', error))
    }
  },
  created () {
    console.log('Devsar demo, testing api connection...')
    this.fetchAPIUsers()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
