<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <login-page></login-page>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import LoginPage from './components/LoginPage.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    LoginPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
