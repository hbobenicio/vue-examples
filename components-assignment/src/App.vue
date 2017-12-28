<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <the-header></the-header>
      </div>
    </div>

    <hr>

    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <server-list></server-list>
      </div>

      <div class="col-xs-12 col-sm-6">
        <server-details></server-details>
      </div>
    </div>

    <hr>

    <div class="row">
      <div class="col-xs-12">
        <the-footer></the-footer>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import ServerList from './components/ServerList.vue'
import ServerDetails from './components/ServerDetails.vue'

export default {
  components: {
    [TheHeader.name]: TheHeader,
    [TheFooter.name]: TheFooter,
    [ServerList.name]: ServerList,
    [ServerDetails.name]: ServerDetails
  }
}
</script>

<style>

</style>
