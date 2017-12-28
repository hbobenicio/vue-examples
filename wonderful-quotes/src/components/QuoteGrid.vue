<template>
  <div class="row">
    <app-quote-grid-item v-for="(quote, index) in quotes" :key="index"
      @click.native="deleteQuote(index)">
      {{quote}}
    </app-quote-grid-item>
  </div>
</template>

<script>
import QuoteGridItem from './QuoteGridItem.vue'

export default {
  name: 'AppQuoteGrid',

  props: ['quotes'],

  components: {
    [QuoteGridItem.name]: QuoteGridItem
  },

  methods: {
    deleteQuote (index) {
      this.$emit('quoteDeleted', index)
    }
  }
}
</script>

<style scoped>

</style>

