<template>
  <div class="component app-quote">
    <div class="app-quote-title">
      <slot name="title"></slot>
      <span class="app-quote-subtitle">

        <!-- Content inside slots are used if the user do not specify a slot projection -->
        <slot name="subtitle">Default Subtitle</slot>
      </span>
    </div>
    <hr>
    <div class="app-quote-content">

      <!-- <slot name="content"></slot> -->
      <!-- A default slot can be used with named slots -->
      <slot>Default Content</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppQuote'
}
</script>

<style scoped>
  div.app-quote {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px;
  }

  div.app-quote-title {
    font-style: italic;
  }

  span.app-quote-subtitle {
    color: lightgray;
  }

  h2 {
    color: red;
  }
</style>


