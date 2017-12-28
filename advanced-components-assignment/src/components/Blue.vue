<template>
    <div>
        <h3>
          <slot name="title">Default Blue Title</slot>
        </h3>
        <hr>
        <slot>Default Blue Content (default slot)</slot>
    </div>
</template>

<script>
export default {
  name: 'AppBlue'
}
</script>

<style scoped>
    div {
        border: 1px solid blue;
        background-color: lightblue;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>
