<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/account">Account</router-link>
    </nav>

    <router-view></router-view>
    <!-- <app-user></app-user> -->

    <hr>
    <p><small>Not italic</small></p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

</style>
