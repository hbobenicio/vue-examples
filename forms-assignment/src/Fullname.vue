<template>
  <div>
    <label for="inpFirstName">First Name:</label>
    <input id="inpFirstName" type="text" name="firstName" class="form-control"
      :value="firstName"
      @input="changeFullname(true, $event)">

    <label for="inpLastName">Last Name:</label>
    <input id="inpLastName" type="text" name="lastName" class="form-control"
    :value="lastName"
    @input="changeFullname(false, $event)">
  </div>
</template>

<script>
export default {
  name: 'AppFullname',

  props: {
    value: {
      type: String,
      required: true
    }
  },

  computed: {
    firstName () {
      return this.value ? this.value.split(' ')[0] : ''
    },

    lastName () {
      return this.value && this.value.includes(' ') ? this.value.split(' ')[1] : ''
    }
  },

  methods: {
    changeFullname (isFirst, event) {
      let name = ''
      if (isFirst) {
        name = event.target.value + ' ' + this.lastName
      } else {
        name = this.firstName + ' ' + event.target.value
      }
      this.value = name
      this.$emit('input', this.value)
    }
  }
}
</script>

