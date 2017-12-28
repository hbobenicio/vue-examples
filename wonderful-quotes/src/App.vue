<template>
  <div class="container">
    <app-header :quotesCounter="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <app-new-quote @quoteAdded="addNewQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: click on a quote to delete it</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import QuoteGrid from './components/QuoteGrid.vue'
  import NewQuote from './components/NewQuote.vue'

  export default {
    components: {
      [Header.name]: Header,
      [QuoteGrid.name]: QuoteGrid,
      [NewQuote.name]: NewQuote
    },

    data () {
      return {
        maxQuotes: 10,
        quotes: [
          'Just a Quote to see something'
        ]
      }
    },

    methods: {
      addNewQuote (newQuote) {
        if (this.quotes.length >= this.maxQuotes) {
          return alert('Please, remove some quote first')
        }
        this.quotes.push(newQuote)
      },

      deleteQuote (index) {
        this.quotes.splice(index, 1)
      }
    }
  }
</script>

<style>
</style>
