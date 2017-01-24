var app = angular.module('myApp');

app.service('provideGameData', function($http, baseUrl) {
  var games = [];
  var currentGame = null;

  this.addGame = function(game) {
    games.push(game);
    return;
  };

  this.setCurrentGame = function(game) {
    console.log('currentGame set to: ', game);
    currentGame = game;
    return;
  };

  this.getCurrentGame = function() {
    return currentGame;
  };

  this.getGames = function() {
    return games;
  };

  this.ajaxGetGames = function() {
    return $http({
      method: 'GET',
      url: baseUrl + '/games',
    })
    .then(function(response) {
      games = response.data;
      return response;
    });
  };

  this.ajaxGetGame = function(id) {
    return $http({
      method: 'GET',
      url: baseUrl + '/games/' + id,
    })
    .then(function(response) {
      games = response.data;
      return response;
    });
  };

});
