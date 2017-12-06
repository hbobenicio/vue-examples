var Utils = {
  Converter: {
    numberToPercentStr: function(number) {
      return `${number}%`;
    },
  },
  Random: {
    getRandomInt: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }
};

new Vue({
  el: '#app',
  data: {
    gameIsOn: false,
    player: {
      name: 'PLAYER',
      health: 100
    },
    monster: {
      name: 'MONSTER',
      health: 100
    },
    logMessages: []
  },
  computed: {
    playerHealthWidth: function() {
      return Utils.Converter.numberToPercentStr(this.player.health);
    },
    monsterHealthWidth: function() {
      return Utils.Converter.numberToPercentStr(this.monster.health);
    }
  },
  methods: {
    onStartNewGame: function() {
      console.log('Starting a new game');
      this.resetGame();
      this.gameIsOn = true;
      console.log('A new game has started');
    },

    resetGame: function() {
      this.player.health = 100;
      this.monster.health = 100;
    },

    gameOver: function() {
      this.player.health = 0;
      this.gameIsOn = false;
      alert("You've lost! Better luck next time");
    },

    onAttack: function() {
      var playerHit = Utils.Random.getRandomInt(1, 11);
      var monsterHit = Utils.Random.getRandomInt(1, 11);

      this.monster.health = Math.max(0, this.monster.health - playerHit);
      this.player.health = Math.max(0, this.player.health - monsterHit);

      this.logAttack(this.monster.name, this.player.name, monsterHit);
      this.logAttack(this.player.name, this.monster.name, playerHit);
    },

    onSpecialAttack: function() {
      var playerHit = Utils.Random.getRandomInt(20, 31);
      var monsterHit = Utils.Random.getRandomInt(1, 11);

      this.monster.health = Math.max(0, this.monster.health - playerHit);
      this.player.health = Math.max(0, this.player.health - monsterHit);
    },

    onHeal: function() {
      var playerHeal = Utils.Random.getRandomInt(15, 26);
      var monsterHit = Utils.Random.getRandomInt(1, 11);

      this.player.health = Math.min(100, this.player.health + playerHeal);
      this.player.health = Math.max(0, this.monster.health - monsterHit);
    },

    onGiveUp: function() {
      this.gameOver();
    },

    logAttack: function(attacker, enemy, hitValue) {
      var msg = `${attacker} hits ${enemy} for ${hitValue}`;
      this.logMessages.push(msg);
    }

  }
})
