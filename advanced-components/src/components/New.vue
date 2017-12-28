<template>
  <div>
    <h3>New Quote</h3>
    <button type="button" @click="counter++">Increase</button>
    <p>{{counter}}</p>
  </div>
</template>

<script>
export default {
  name: 'AppNewQuote',

  data () {
    return {
      counter: 0
    }
  },

  created () {
    console.log('New::created')
  },

  destroyed () {
    console.log('New::destroyed')
  },

  activated () {
    console.log('New::activated')
  },

  deactivated () {
    console.log('New::deactivated')
  }
}
</script>

<style scoped>

</style>
