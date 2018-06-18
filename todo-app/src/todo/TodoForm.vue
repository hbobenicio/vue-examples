<template>
  <div class="TodoForm card my-4">
    <div class="card-header">
      Todo Form
    </div>
    <div class="card-body">
      <form @submit.prevent="onSubmit" novalidate>
        <div class="form-group">
          <label for="descriptionInput">Description:</label>
          <input id="descriptionInput" class="form-control" type="text"
            name="description" placeholder="Enter your todo description here..."
            v-model="description"
            required>
        </div>

        <div class="form-group">
          <button type="submit" class="btn btn-success"
            :disabled="!valid">
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: ''
    }
  },

  computed: {
    valid() {
      return this.description ? true : false
    }
  },

  methods: {
    onSubmit() {
      this.$store.dispatch('addTodo', this.description);
    }
  }
}
</script>

