<template>
  <div>
    <template v-if="server">
      <p>Server #{{server.id}} - {{server.status}}</p>
      <hr>
      <button type="button" @click="resetStatus">Change to Normal</button>
    </template>

    <template v-else>
      <p>Please, select a server</p>
    </template>
  </div>
</template>

<script>
import { serverBus } from '../main'

export default {
  name: 'ServerDetails',

  data () {
    return {
      server: null
    }
  },

  created () {
    serverBus.$on('serverSelected', server => this.server = server)
  },

  methods: {
    resetStatus () {
      this.server.status = 'Normal'
    }
  }
}
</script>
