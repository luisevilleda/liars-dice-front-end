'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {

  $routeProvider
  .when('/newGame', {
    templateUrl : './partials/NewGame.html',
    controller: 'NewGameController',
  })
  .when('/game', {
    templateUrl: './partials/Game.html',
    controller: 'GameController',
  })
  .otherwise({ redirectTo: '/newGame' })
});


