var app = angular.module('myApp');

app.controller('GameController',
  ['$scope',
  '$location',
  '$routeParams',
  'initializeGame',
  'provideGameData',
  function($scope, $location, $routeParams, initializeGame, provideGameData) {
    provideGameData.ajaxGetGames()
    .then(function(response) {
      // Handle no games existing
      if (response.data.length === 0) {
        return $location.url('/newGame');
      };

      $scope.games = response.data;
      $scope.currentGame = response.data.filter(function(game){
        return game._id === $routeParams.id;
      })[0];

      // Handle the id of that game not existing
      if ($scope.currentGame === undefined) {
        return $location.url('/newGame');
      };

      provideGameData.setCurrentGame($scope.currentGame);
    });
  }]
);
