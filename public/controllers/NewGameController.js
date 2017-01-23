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
        console.log(response);
        if (response.status === 200) {
          provideGameData.addGame(response.data);
          $location.url('/game');
        } else {
          console.log('error: ', response.data);  
        };
      });
    };
  }]
);
