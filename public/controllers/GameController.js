var app = angular.module('myApp');

app.controller('GameController',
  ['$scope',
  '$location',
  '$routeParams',
  'initializeGame',
  'provideGameData',
  function($scope, $location, $routeParams, initializeGame, provideGameData) {
    provideGameData.ajaxGetGame($routeParams.id)
    .then(function(response) {
      console.log('Game response:', response);
      $scope.currentGame = response.data;
      console.log('setting currentGame to: ', response.data);
      provideGameData.setCurrentGame(response.data);
      $scope.ajaxFinish = true;
    })
    .catch(function(err) {
      return $location.url('/newGame');
    });
  }]
);
