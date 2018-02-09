<template>
  <div class="counter">
    <h3>Counter</h3>

    <button type="button" @click="decrement">-</button>
    {{ counter }}
    <button type="button" @click="increment">+</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Counter',

  computed: mapGetters([
    'counter'
  ]),

  methods: mapActions([
    'increment',
    'decrement'
  ])
}
</script>

<style scoped>
</style>
