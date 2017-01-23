var app = angular.module('myApp');

app.service('gameHelpers', function() {
  this.findNextPlayer = function(game) {
    if (game.actions === undefined || game.actions.length === 0) {
      // No actions have been taken
      return 0;
    };
    var nextPlayer = game.actions[0].player;
    if (nextPlayer >= game.numPlayers) {
      // The last action to be taken was taken by the 'last' player
      return 0;
    } else {
      return nextPlayer;
    };
  };
});
