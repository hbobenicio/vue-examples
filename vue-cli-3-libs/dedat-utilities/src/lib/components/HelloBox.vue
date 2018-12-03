<template>
  <div class="DedatHelloBox">
    <p>{{content}}</p>
  </div>
</template>

<script>
export default {
  name: 'DedatHelloBox',
  data: function() {
    return {
      content: 'Hello, Vue CLI 3 Library'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.DedatHelloBox {
  border: 1px solid black;
}
</style>
