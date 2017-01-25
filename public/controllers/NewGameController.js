var app = angular.module('myApp');

app.controller('NewGameController',
  ['$scope',
  '$location',
  'ajaxCalls',
  'provideGameData',
  function($scope, $location, ajaxCalls, provideGameData) {
    $scope.numDice = 5;
    $scope.numPlayers = 2;

    // Query user for new game info
    $scope.startGame = function() {
      ajaxCalls.init($scope.numDice, $scope.numPlayers)
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
