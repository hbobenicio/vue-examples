<template>
    <div>
        <h3>
          <slot name="title">Default Green Title</slot>
        </h3>
        <hr>
        <slot>Default Green Content (default slot)</slot>
    </div>
</template>

<script>
export default {
  name: 'AppGreen'
}
</script>

<style scoped>
    div {
        border: 1px solid green;
        background-color: lightgreen;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>
