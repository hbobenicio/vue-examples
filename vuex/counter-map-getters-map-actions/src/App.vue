<template>
  <div id="app">
    <h1>Vuex: Counter Example (Map Geters + Map Actions)</h1>

    <Counter />
  </div>
</template>

<script>
import Counter from '@/Counter'

export default {
  name: 'app',
  components: {
    Counter
  }
}
</script>

<style lang="css" scoped>
  h1 {
    text-align: center;
  }
</style>
