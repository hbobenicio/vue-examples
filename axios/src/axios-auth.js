import axios from 'axios'

// Creates an Axios Custom Instance
const instance = axios.create({
  baseURL: 'https://vue-examples-axios-01.firebaseio.com'
})

//instance.defaults.headers...

export default instance
