<template>
  <div class="row">
    <form>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <label for="quote-textarea">Quote</label>
        <textarea id="quote-textarea" name="quote-textarea" class="form-control" rows="3"
          v-model="quoteText"></textarea>
      </div>

      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <button type="button" class="btn btn-primary"
          @click.prevent="createNewQuote">Add Quote</button>
      </div>

    </form>
  </div>
</template>

<script>

export default {
  name: 'AppNewQuote',

  data () {
    return {
      quoteText: ''
    }
  },

  methods: {
    createNewQuote () {
      this.$emit('quoteAdded', this.quoteText)
      this.quoteText = ''
    }
  }
}
</script>

<style scoped>

</style>

