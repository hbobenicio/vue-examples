<template>
  <div class="counter">
    <h3>Counter</h3>

    <button type="button" @click="decrement">-</button>
    {{ counter }}
    <button type="button" @click="increment">+</button>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'Counter',

  computed: {
    counter () {
      return this.$store.state.counter
    }
  },

  methods: {
    increment () {
      this.$store.dispatch('increment')
    },

    decrement () {
      this.$store.dispatch('decrement')
    }
  }
}
</script>

<style scoped>
</style>
