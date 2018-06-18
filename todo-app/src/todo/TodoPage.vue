<template>
  <article id="TodoPage" class="TodoPage">
    <header>
      <h1>Todo Page</h1>
    </header>

    <TodoList />

    <div class="button-bar">
      <button class="btn btn-primary" @click="onAddTodo">Add Todo</button>
    </div>

    <TodoForm v-if="showTodoForm" />
  </article>
</template>

<script>
import TodoList from './todo-list/TodoList.vue'
import TodoForm from './TodoForm.vue'

export default {
  components: {
    TodoList,
    TodoForm
  },

  computed: {
    showTodoForm() {
      return this.$store.state.todo.showForm;
    }
  },

  methods: {
    onAddTodo() {
      this.$store.dispatch('showTodoForm');
    }
  }
}
</script>
