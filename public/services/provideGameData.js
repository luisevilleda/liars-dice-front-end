var app = angular.module('myApp');

app.service('provideGameData', function() {
  var games = [];

  this.addGame = function(game) {
    games.push(game);
  };

  this.getGames = function() {
    return games;
  };

});
