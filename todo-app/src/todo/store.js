export default {
  state: {
    todoList: [
      {id: 1, description: 'Lavar a Louça', done: false},
      {id: 2, description: 'Engomar as Roupas', done: false}
    ],
    showForm: false
  },
  mutations: {
    addTodo(state, todo) {
      const maxIdReducer = (maxId, todo) => maxId < todo.id ? todo.id : maxId;
      const maxId = state.todoList.reduce(maxIdReducer, -1);
      const nextId = maxId + 1;
      state.todoList.push({...todo, id: nextId});
    },
    removeTodo(state, todoId) {
      const newTodoList = state.todoList.concat();
      const excludeIndex = newTodoList.findIndex(todo => todo.id === todoId);
      if (excludeIndex >= 0) {
        newTodoList.splice(excludeIndex, 1);
        state.todoList = newTodoList;
      } else {
        console.warn('Ignorando remoção de Todo por ID: ID não encontrado.')
      }
    },
    doneTodo(state, todoId) {
      const todo = state.todoList.find(todo => todo.id === todoId);
      todo.done = true; // is it ok to update like this? Or is it better to create another Todo?
    },
    toggleDoneTodo(state, todoId) {
      const todo = state.todoList.find(todo => todo.id === todoId);
      todo.done = !todo.done; // is it ok to update like this? Or is it better to create another Todo?
    },
    showTodoForm(state) {
      state.showForm = true;
    },
    hideTodoForm(state) {
      state.showForm = false;
    }
  },
  actions: {
    addTodo(context, description) {
      context.commit('addTodo', {description, done: false});
      context.commit('hideTodoForm');
    },
    removeTodo(context, todoId) {
      context.commit('removeTodo', todoId);
    },
    doneTodo(context, todoId) {
      context.commit('doneTodo', todoId);
    },
    toggleDoneTodo(context, todoId) {
      context.commit('toggleDoneTodo', todoId);
    },
    showTodoForm(context) {
      context.commit('showTodoForm');
    },
    hideTodoForm(context) {
      context.commit('hideTodoForm');
    }
  }
}
