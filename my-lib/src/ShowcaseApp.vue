<template>
  <div id="my-lib-showcase-app">
    <my-lib-header :text="'Header Component'"></my-lib-header>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'MyLibShowcaseApp',
  components: {
    [Header.name]: Header
  },
  data () {
    return {
      title: 'Showcase App'
    }
  }
}
</script>

<style lang="css" scoped></style>
