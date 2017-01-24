var app = angular.module('myApp');

app.controller('NewGameController',
  ['$scope',
  '$location',
  'initializeGame',
  'provideGameData',
  function($scope, $location, initializeGame, provideGameData) {
    $scope.numDice = 5;
    $scope.numPlayers = 2;

    // Query user for new game info
    $scope.startGame = function() {
      initializeGame.init($scope.numDice, $scope.numPlayers)
      .then(function(response) {
        console.log('Got a POST response: ', response);
        if (response.status === 200) {
          // provideGameData.setCurrentGame();
          console.log('Changing location to: ', '/game/' + response.data._id);
          $location.url('/game/' + response.data._id);
        } else {
          console.log('error: ', response.data);  
        };
      });
    };
  }]
);
