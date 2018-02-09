<template>
  <div class="naive-counter">
    <h3>Naive Counter</h3>

    <button type="button" @click="counter--">-</button>
    {{ counter }}
    <button type="button" @click="counter++">+</button>
  </div>
</template>

<script>
export default {
  name: 'NaiveCounter',
  data: () => ({
    counter: 0
  })
}
</script>

<style scoped>
</style>
