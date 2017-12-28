<template>
  <li class="list-group-item">
    Server #{{ serverNumber }}
  </li>
</template>

<script>
export default {
  name: 'ServerListItem',
  props: {
    serverNumber: {
      type: Number,
      required: true
    }
  }
}
</script>
