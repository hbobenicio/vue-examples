<template>
  <div id="app">
    <h1>Vuex: Counter Example</h1>

    <NaiveCounter />
    <Counter />
  </div>
</template>

<script>
import NaiveCounter from '@/NaiveCounter'
import Counter from '@/Counter'

export default {
  name: 'app',
  components: {
    NaiveCounter,
    Counter
  }
}
</script>

<style lang="css" scoped>
  h1 {
    text-align: center;
  }
</style>
