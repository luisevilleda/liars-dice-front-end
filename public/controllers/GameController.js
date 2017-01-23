var app = angular.module('myApp');

app.controller('GameController',
  ['$scope',
  '$location',
  'initializeGame',
  'provideGameData',
  function($scope, $location, initializeGame, provideGameData) {
    var currentGames = provideGameData.getGames();
    if (currentGames.length === 0) {
      $location.url('/newGame');
    }
    $scope.games = currentGames;
  }]
);
