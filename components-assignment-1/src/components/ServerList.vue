<template>
  <ul class="list-group">
    <server-list-item
      v-for="index in 5"
      :serverNumber="index">
    </server-list-item>
  </ul>
</template>

<script>
import ServerListItem from './ServerListItem.vue'

export default {
  name: 'ServerList',

  components: {
    [ServerListItem.name]: ServerListItem
  }
}
</script>

