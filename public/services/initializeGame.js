var baseUrl = 'http://localhost:8080';
var app = angular.module('myApp');

app.service('initializeGame', function($http) {
  this.init = function() {
    return $http({
      method: 'POST',
      url: baseUrl + '/games',
    });
  };
});
