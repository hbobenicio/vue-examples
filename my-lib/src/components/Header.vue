<template lang="html">
  <div class="my-lib-component my-lib-header">
    <h1>{{text}}</h1>
  </div>
</template>

<script>
export default {
  name: 'MyLibHeader',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="css" scoped></style>
