var app = angular.module('myApp');

app.service('ajaxCalls', function($http, baseUrl) {
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

  this.claim = function(player, claimNumber, claimFace, moveNumber, moveFace, gameId) {
    var body = {
      player: player,
      claimNumber: claimNumber,
      claimFace: claimFace,
      moveNumber: moveNumber,
      moveFace: moveFace,
    };

    return $http({
      method: 'POST',
      url: baseUrl + '/games/' + gameId + '/claim',
      data: body,
    });
  };
});
