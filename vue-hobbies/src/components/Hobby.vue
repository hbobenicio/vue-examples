<template>
  <span>{{ hobby }}</span>
</template>

<script>
export default {
  name: 'Hobby',
  props: ['hobby']
}
</script>

<style>
span {
  color: blue;
}
</style>
