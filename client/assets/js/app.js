"use strict";

var app = angular.module('app', ['firebase', 'ngSanitize', 'ngRoute', 'ngStorage']);

app.config(function($logProvider) {
  $logProvider.debugEnabled(true);
});

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/login/login.html',
      controller: 'LoginController'
    })
    .when('/login', {
      templateUrl: '/templates/login/login.html',
      controller: 'LoginController'
    })
    .when('/messages', {
      templateUrl: '/templates/messages/messages.html',
      controller: 'MessagesController'
    })
    .when('/logout', {
      templateUrl: '/templates/logout/logout.html',
      controller: 'LogoutController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
