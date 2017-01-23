var app = angular.module('myApp');

app.service('initializeGame', function($http, baseUrl) {
  this.init = function(numDice, numPlayers) {
    var body = {
      numDice: numDice,
      numPlayers: numPlayers,
    };

    return $http({
      method: 'POST',
      url: baseUrl + '/games',
      data: body,
    });
  };
});
