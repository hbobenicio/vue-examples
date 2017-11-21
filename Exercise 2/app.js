new Vue({
  el: '#exercise',
  data: {
      value: ''
  },
  methods: {
    showAlert: function() {
      alert("Button clicked!");
    },
    setValue: function(event) {
      console.log(event);
      this.value = event.target.value;
    }
  }
});
