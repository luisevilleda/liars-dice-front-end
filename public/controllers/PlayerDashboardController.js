var app = angular.module('myApp');

app.controller('PlayerDashboardController',
  ['$scope',
  '$location',
  'provideGameData',
  'gameHelpers',
  function($scope, $location, provideGameData, gameHelpers) {
    $scope.currentGame = provideGameData.getCurrentGame();
    if ($scope.currentGame === undefined) {
      $location.url('/newGame');
      return;
    };
    $scope.numDice = $scope.currentGame.numDice;
    $scope.numPlayers = $scope.currentGame.numPlayers;
    $scope.currentPlayer = gameHelpers.findNextPlayer($scope.currentGame);
  }]
);
