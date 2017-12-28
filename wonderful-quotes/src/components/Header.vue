<template>
  <div class="row">
    <div class="col-sm-12">
      <h3>Quotes Added</h3>
      <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
          :style="{width: progressWidth}">
          {{quotesCounter}} / {{maxQuotes}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: ['quotesCounter', 'maxQuotes'],
  computed: {
    progress () {
      return this.quotesCounter / this.maxQuotes * 100
    },

    progressWidth () {
      return `${this.progress}%`
    }
  }
}
</script>

