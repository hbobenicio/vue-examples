<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email address: {{email}}</p>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        users: []
      }
    },

    computed: {
      email: function () {
        return this.users && this.users.length > 0 ? this.users[0].email : ''
      }
    },

    created () {
      axios.get('/users.json')
        .then(this.onFetchUsers)
        .catch(error => console.error(error))
    },

    methods: {
      onFetchUsers (response) {
        console.log(response)
        Object.entries(response.data).forEach(([userKey, user]) => {
          console.log(user.email)
        })

        this.users = this.mapFromFirebaseUsers(response.data)
      },

      mapFromFirebaseUsers (firebaseUsersData) {
        return Object
          .entries(firebaseUsersData)
          .map(([userKey, user]) =>
            this.newUserFromFirebase(userKey, user)
          )
      },

      newUserFromFirebase (userKey, userData) {
        return {
          ...userData,
          id: userKey
        }
      }
    }
  }
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>
