'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', ['ngRoute']);

app.constant('baseUrl', 'http://localhost:8080');

app.config(function($routeProvider, $locationProvider) {

  $routeProvider
  .when('/newGame', {
    templateUrl : './partials/NewGame.html',
    controller: 'NewGameController',
  })
  .when('/game/:id', {
    templateUrl: './partials/Game.html',
    controller: 'GameController',
  })
  .otherwise({ redirectTo: '/newGame' })
});


