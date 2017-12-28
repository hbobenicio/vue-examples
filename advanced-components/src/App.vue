<template>
  <div class="container component">
    <div class="row">
      <div class="col-xs-12">

        <h3 class="text-center">Dynamic Component:</h3>
        <div class="text-center">
          <button type="button" @click="selectedComponent = Quote.name">Quote</button>
          <button type="button" @click="selectedComponent = Author.name">Author</button>
          <button type="button" @click="selectedComponent = New.name">New</button>
        </div>
        <p> <span class="bold">Selected Component:</span> {{selectedComponent}}</p>

        <!-- Dynamic Component with the 'component' Component -->
        <!-- On each change of the 'is' property, by default -->
        <!-- will destroy the old component and create a new one -->
        <div class="row">
          <div class="col-xs-6">
            <p class="text-center">On change: <span class="bold">destroy and (re)create</span></p>
            <component :is="selectedComponent"></component>
          </div>
          <div class="col-xs-6">

            <!-- This will keep the components instances alive -->
            <p class="text-center">On change: <span class="bold">keep components alive</span></p>
            <keep-alive>
              <component :is="selectedComponent"></component>
            </keep-alive>
          </div>
        </div>

        <hr>

        <h3 class="text-center">Slots Usage</h3>

        <app-quote>
          <h2 slot="title">{{ title }}</h2>
          <!-- slot "subtitle" not specified here -->

          <!-- <p slot="content">A Wonderful Sloted Quote!</p> -->
          <p>A Wonderful Sloted Quote!</p>
        </app-quote>

        <app-quote>
          <h2 slot="title">Another Quote</h2>
          <span slot="subtitle">My custom subtitle!</span>

          <!-- <p slot="content">A Wonderful Sloted Quote!</p> -->
          <p>Another Wonderful Sloted Quote!</p>
        </app-quote>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from './components/Quote.vue'
import Author from './components/Author.vue'
import New from './components/New.vue'

export default {
  components: {
    [Quote.name]: Quote,
    [Author.name]: Author,
    [New.name]: New
  },

  data () {
    return {
      title: 'The Quote',
      selectedComponent: Quote.name,
      Quote,
      Author,
      New
    }
  }
}
</script>

<style scoped>
  h2 {
    color: green;
  }

  .bold {
    font-weight: bold;
  }
</style>
