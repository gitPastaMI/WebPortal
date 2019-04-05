<template>
  <div>
    <h1>Login</h1>
    <input type="text"
           name="username"
           placeholder="username"
           v-model="credentials.username">
    <input type="password"
           name="password"
           placeholder="password"
           v-model="credentials.password">
    <button type="button"
            name="button"
            v-on:click="login">OK</button>
    <h2>{{error}}</h2>
    <h2>{{user}}</h2>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      },
      error: null,
      user: null
    }
  },
  methods: {
    async login () {
      let res = await AuthService.login(this.credentials)
      this.error = res.data.error
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
