new Vue({
  el: '#exercise3',
  data: {
    value: 0
  },
  computed: {
    result: function() {
      return this.value === 37 ? 'done' : 'not there yet';
    }
  },
  watch: {
    result: function() {
      console.log('You made it!');

      var vue = this;
      setTimeout(function(){
        vue.value = 0;
      }, 5000);
    }
  }
})
