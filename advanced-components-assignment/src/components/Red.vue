<template>
    <div>
        <h3>
          <slot name="title">Default Red Title</slot>
        </h3>
        <hr>
        <slot>Default Red Content (default slot)</slot>
    </div>
</template>

<script>
export default {
  name: 'AppRed'
}
</script>

<style scoped>
    div {
        border: 1px solid red;
        background-color: lightcoral;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>
