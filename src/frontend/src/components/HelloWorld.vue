<template>
  <v-container>
    <v-layout wrap justify-center align-center mt-5
    >
      <v-flex xs12>
        <h1>{{ users }}</h1>
      </v-flex>
      <v-flex xs12 sm10>
        <v-card class="elevation-12">
          <v-toolbar dark color="secondary">
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
              <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="secondary">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data: () => ({
  }),
  apollo: {
    users: gql(`
      query {
        users {
          email
        }
      }`
    )
  }
}
</script>

<style>

</style>
