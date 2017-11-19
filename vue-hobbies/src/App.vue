<template>
  <div id="app">
    <h1>Hobby List App</h1>
    <hr>

    <HobbyList/>
  </div>
</template>

<script>
import HobbyList from './components/HobbyList'

export default {
  name: 'app',
  components: {
    HobbyList
  }
}
</script>

<style></style>
