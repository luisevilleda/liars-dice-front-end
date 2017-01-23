var app = angular.module('myApp');

app.controller('GameController',
  ['$scope',
  '$location',
  '$routeParams',
  'initializeGame',
  'provideGameData',
  function($scope, $location, $routeParams, initializeGame, provideGameData) {
    provideGameData.getGames()
    .then(function(response) {
      if (response.data.length === 0) {
        $location.url('/newGame');
      };
      $scope.games = response.data;
      $scope.currentGame = response.data.filter(function(game){
        return game._id === $routeParams.id;
      })[0];
      if ($scope.currentGame === undefined) {
        $location.url('/newGame');
      };
    });
  }]
);
