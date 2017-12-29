<template>
    <div class="container">
        <form v-if="!isFormSubmmited">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <div class="form-group">
                      <!-- <label for="inpFirstName">First Name:</label>
                      <input id="inpFirstName" type="text" name="firstName" class="form-control"
                        v-model.trim="formData.firstName">

                      <label for="inpLastName">Last Name:</label>
                      <input id="inpLastName" type="text" name="lastName" class="form-control"
                        v-model.trim="formData.lastName"> -->

                        <app-fullname v-model="formData.fullname"></app-fullname>
                    </div>

                    <!-- Mail -->
                    <div class="form-group">
                      <label for="inpEmail">Email:</label>
                      <input id="inpEmail" type="text" name="email" class="form-control"
                        v-model.trim="formData.email">
                    </div>

                    <!-- Password -->
                    <div class="form-group">
                      <label for="inpPassword">Password:</label>
                      <input id="inpPassword" type="password" name="password" class="form-control"
                        v-model="formData.password">
                    </div>

                    <!-- Store Data? Yes/No (Radio) -->
                    <div class="form-group">
                      <label for="rdoStoreDataYes">
                        <input id="rdoStoreDataYes" type="radio" name="storeData"
                          value="Yes"
                          v-model="formData.storeData">
                        Yes
                      </label>
                      <label for="rdoStoreDataNo">
                        <input id="rdoStoreDataNo" type="radio" name="storeData"
                          value="No"
                          v-model="formData.storeData">
                        No
                      </label>
                    </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <button type="button" class="btn btn-primary"
                      @click="onSubmit">Submit</button>

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>

        <div class="row" v-else>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ formData.fullname }}</p>
                        <p>Mail: {{ formData.email }}</p>
                        <p>Password: {{ formData.password }}</p>
                        <p>Store in Database?: {{ formData.storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Fullname from './Fullname.vue'

    export default {
      components: {
        [Fullname.name]: Fullname
      },

      data () {
        return {
          formData: {
            // firstName: '',
            // lastName: '',
            fullname: '',
            email: '',
            password: '',
            storeData: 'No',
          },
          isFormSubmmited: false
        }
      },

      computed: {
        // fullname () {
        //   return `${this.formData.firstName} ${this.formData.lastName}`
        // }
      },

      methods: {
        onSubmit () {
          this.isFormSubmmited = true
        }
      }
    }
</script>

<style>
</style>
