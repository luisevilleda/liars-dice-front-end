var app = angular.module('myApp');

app.controller('PlayerDashboardController',
  ['$scope',
  '$location',
  'provideGameData',
  'gameHelpers',
  function($scope, $location, provideGameData, gameHelpers) {
    $scope.currentGame = provideGameData.getCurrentGame();
    if ($scope.currentGame === null) {
      console.log('Back to newGame in PlayerDashboardController');
      $location.url('/newGame');
      return;
    };
    // $scope.numDice = $scope.currentGame.numDice;
    // $scope.numPlayers = $scope.currentGame.numPlayers;
    $scope.currentPlayer = gameHelpers.findNextPlayer($scope.currentGame);
    console.log('currentGame: ', $scope.currentGame.playerHands[0]);
    // $scope.playerHand = $scope.currentGame.playerHands[0];
  }]
);
