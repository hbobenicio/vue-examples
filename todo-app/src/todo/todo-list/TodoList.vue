<template>
  <div class="card my-4">
    <div class="card-header">
      Todo List
    </div>
    <ul class="list-group list-group-flush">
      <TodoListItem v-for="todo in todoList" :key="todo.id" :todo="todo" />
    </ul>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue'

export default {
  components: {
    TodoListItem
  },

  computed: {
    todoList() {
      return this.$store.state.todo.todoList
    }
  }
}
</script>
