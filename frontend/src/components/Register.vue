<template>
  <div>
    <h1>Register</h1>
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
            v-on:click="register">OK</button>
    <h2>{{msg}}</h2>
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
      msg: ''
    }
  },
  methods: {
    async register () {
      let res = await AuthService.register(this.credentials)
      this.msg = res.data.msg
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
