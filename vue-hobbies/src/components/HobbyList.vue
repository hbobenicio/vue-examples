<template>
  <section>
    <header>
      <h3>Hobby List</h3>
    </header>
    <input type="text" name="newHobby" v-model="newHobby">
    <button type="button" v-on:click="addHobby">Add Hobby</button>
    <p v-if="hobbyDeleted">Hobby was deleted!</p>
    <ul>
      <li v-for="hobby in hobbyList" v-on:click="removeHobby(hobby)">
        <Hobby v-bind:hobby="hobby" />
      </li>
    </ul>
    <p v-bind:class="{negrito: hobbyList.length > 3}">Total Hobbies:
      <span v-bind:style="{color: hobbyList.length > 3 ? 'red' : 'green'}">
        {{hobbyList.length}}
      </span>
    </p>
  </section>
</template>

<script>
import Hobby from './Hobby'

export default {
  name: 'HobbyList',
  components: {
    Hobby
  },
  data () {
    return {
      hobbyList: ['Programming', 'Gamming', 'Studying'],
      newHobby: '',
      hobbyDeleted: false
    }
  },
  methods: {
    addHobby () {
      this.hobbyList.push(this.newHobby)
    },
    removeHobby (hobby) {
      const position = this.hobbyList.indexOf(hobby)
      this.hobbyList.splice(position, 1)
      this.hobbyDeleted = true
      setTimeout(() => {
        this.hobbyDeleted = false
      }, 1000)
    }
  }
}
</script>

<style>
.negrito {
  font-weight: bold;
}
</style>
