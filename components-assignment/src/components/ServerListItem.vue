<template>
  <li class="list-group-item" @click="onServerSelected">
    Server #{{ server.id }} - {{ server.status }}
  </li>
</template>

<script>
import { serverBus } from '../main'

export default {
  name: 'ServerListItem',
  props: {
    server: {
      type: Object,
      required: true
    }
  },
  methods: {
    onServerSelected () {
      console.log(`Server ${this.server.id} selected`)
      serverBus.$emit('serverSelected', this.server)
    }
  }
}
</script>

<style scoped>
li.list-group-item {
  cursor: pointer;
}
</style>
