<template lang="html">
  <div class="user">
    <h3>The User</h3>
    <p>My username is {{ username }}</p>

    <app-info></app-info>
  </div>
</template>

<script>
import Info from './Info.vue'

export default {
  data () {
    return {
      username: 'Hugo'
    }
  },
  components: {
    'app-info': Info
  }
}
</script>

<style lang="css" scoped>
p {
  font-style: italic;
}
</style>
