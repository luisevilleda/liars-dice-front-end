var app = angular.module('myApp');

app.service('provideGameData', function($http, baseUrl) {
  var games = [];

  this.addGame = function(game) {
    games.push(game);
  };

  this.getGames = function() {
    return $http({
      method: 'GET',
      url: baseUrl + '/games'
    });
  };

});
