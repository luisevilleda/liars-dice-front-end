var app = angular.module('myApp');

app.controller('PlayerDashboardController',
  ['$scope',
  '$location',
  'provideGameData',
  'gameHelpers',
  'ajaxCalls',
  '$routeParams',
  function($scope, $location, provideGameData, gameHelpers, ajaxCalls, $routeParams) {
    $scope.currentGame = provideGameData.getCurrentGame();
    if ($scope.currentGame === null) {
      console.log('Back to newGame in PlayerDashboardController');
      $location.url('/newGame');
      return;
    };

    $scope.currentPlayer = gameHelpers.findNextPlayer($scope.currentGame);
    console.log('currentGame: ', $scope.currentGame.playerHands[0]);
    $scope.playerHand = $scope.currentGame.playerHands[$scope.currentPlayer];

    $scope.claimNumber = 1;
    $scope.claimFace = 1;
    $scope.moveNumber = 0;
    $scope.moveFace = 1;

    $scope.claimButton = function() {
      ajaxCalls.claim(
        $scope.currentPlayer,
        $scope.claimNumber,
        $scope.claimFace,
        $scope.moveNumber,
        $scope.moveFace,
        $routeParams.id
      )
      .then(function(response) {
        console.log(response);
      });

    };

    $scope.challengeButton = function() {
      console.log('challengeButton pressed');
    };

  }]
);
