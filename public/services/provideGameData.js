var app = angular.module('myApp');

app.service('provideGameData', function($http, baseUrl) {
  var games = [];
  var currentGame = {};

  this.addGame = function(game) {
    return games.push(game);
  };

  this.setCurrentGame = function(game) {
    return currentGame = game;
  };

  this.getCurrentGame = function() {
    return currentGame;
  };

  this.ajaxGetGames = function() {
    return $http({
      method: 'GET',
      url: baseUrl + '/games'
    })
    .then(function(response) {
      games = response.data;
      return response;
    });
  };

  this.getGames = function() {
    return games;
  }

});
