new Vue({
  el: '#exercise4',
  data: {
    effectClass: '',
    effectIntervalRef: undefined,
    userClass: '',
    userClass2: '',
    userClass2Activated: '',
    userClass3: ''
  },
  methods: {
    startEffect: function() {
      this.effectIntervalRef = setInterval(function(vue){
        vue.effectClass = vue.effectClass === 'highlight' ? 'shrink' : 'highlight';
      }, 1000, this);
    },
    stopEffect: function() {
      clearInterval(this.effectIntervalRef);
      this.effectIntervalRef = undefined;
      this.effectClass = '';
    },
    startProgress: function() {

    }
  }
});
