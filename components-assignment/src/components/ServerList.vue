<template>
  <ul class="list-group">
    <server-list-item
      v-for="server in servers"
      :server="server"
      :key="server.id">
    </server-list-item>
  </ul>
</template>

<script>
import ServerListItem from './ServerListItem.vue'

export default {
  name: 'ServerList',

  data () {
    return {
      servers: [
        {id: 1, status: "Normal"},
        {id: 2, status: "Critical"},
        {id: 3, status: "Unknown"},
        {id: 4, status: "Normal"},
      ]
    }
  },

  components: {
    [ServerListItem.name]: ServerListItem
  }
}
</script>

