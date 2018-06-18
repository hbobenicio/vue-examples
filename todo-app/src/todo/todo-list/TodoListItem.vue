<template>
  <li class="TodoListItem list-group-item" :class="{done: todo.done}">
    <span>
      #{{todo.id}} - {{todo.description}}
    </span>
    <div class="float-right">
      <button type="button" class="btn btn-primary mr-2"
        @click="onToggleDone">
        {{toggleLabel}}
      </button>
      <button type="button" class="btn btn-danger" @click="onExcluir">Excluir</button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['todo'],

  computed: {
    toggleLabel() {
      return this.todo.done ? 'Reativar' : 'Concluir'
    }
  },

  methods: {
    onToggleDone() {
      this.$store.dispatch('toggleDoneTodo', this.todo.id);
    },
    onExcluir() {
      this.$store.dispatch('removeTodo', this.todo.id);
    }
  }
}
</script>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>
