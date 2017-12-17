// import foo from './foo';

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

var GameResult = {
  VICTORY: 'VICTORY',
  LOST: 'LOST'
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
    },
    isLogPanelVisible: function() {
      return this.gameIsOn && this.logMessages.length > 0;
    }
  },
  methods: {
    onStartNewGame: function() {
      console.log('Starting a new game');
      this.startGame();
      console.log('A new game has started');
    },

    startGame: function() {
      this.player.health = 100;
      this.monster.health = 100;
      this.logMessages = [];
      this.gameIsOn = true;
    },

    checkGameOver: function() {
      if (this.monster.health <= 0) {
        this.gameOver(GameResult.VICTORY);
        return true;
      } else if (this.player.health <= 0) {
        this.gameOver(GameResult.LOST);
        return true;
      }
      return false;
    },

    gameOver: function(gameResult) {
      switch (gameResult) {
        case GameResult.VICTORY:
          this.monster.health = 0;
          alert('You won! Congratulations');
          this.gameIsOn = false;
          return true;

        case GameResult.LOST:
          this.player.health = 0;
          alert("You've lost! Better luck next time");
          this.gameIsOn = false;
          return true;
      }
      return false;
    },

    onAttack: function() {
      this.playerAttack(false);
      if (this.gameIsOn) {
        this.monsterAttack();
      }
    },

    playerAttack: function(special) {
      var playerHit = special ? Utils.Random.getRandomInt(20, 31)
                              : Utils.Random.getRandomInt(1, 11);

      this.monster.health = Math.max(0, this.monster.health - playerHit);
      if (this.checkGameOver()) {
        return;
      }
      this.logAttack(this.player.name, this.monster.name, playerHit);
    },

    monsterAttack: function() {
      var monsterHit = Utils.Random.getRandomInt(1, 11);
      this.player.health = Math.max(0, this.player.health - monsterHit);
      if (this.checkGameOver()) {
        return;
      }
      this.logAttack(this.monster.name, this.player.name, monsterHit);
    },

    onSpecialAttack: function() {
      this.playerAttack(true);
      if (this.gameIsOn) {
        this.monsterAttack();
      }
    },

    onHeal: function() {
      var playerHeal = Utils.Random.getRandomInt(15, 26);
      var monsterHit = Utils.Random.getRandomInt(1, 11);

      this.player.health = Math.min(100, this.player.health + playerHeal);
      this.player.health = Math.max(0, this.player.health - monsterHit);
      this.logHeal(this.player.name, playerHeal);
      this.logAttack(this.monster.name, this.player.name, monsterHit);
    },

    onGiveUp: function() {
      this.gameOver(GameResult.LOST);
    },

    logMsg: function(msg) {
      this.logMessages.push(msg);
    },

    logAttack: function(attacker, enemy, hitValue) {
      var msgContent = `${attacker} hits ${enemy} for ${hitValue}`;
      var msgType = attacker;
      this.logMsg({type: msgType, content: msgContent});
    },

    logHeal: function(entity, healValue) {
      var msgContent = `${entity} heals for ${healValue}`;
      this.logMsg({type: 'HEAL', content: msgContent});
    }

  }
})
