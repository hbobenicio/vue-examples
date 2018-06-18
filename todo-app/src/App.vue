<template>
  <div id="App" class="App mt-4">
    <div class="container">
      <div class="row">
        <div class="col">
          <main>
            <TodoPage />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'

import TodoPage from './todo/TodoPage.vue'

export default {
  components: {
    TodoPage
  }
}
</script>
