/* global angular */

(function() {

  "use strict";

  var app = angular.module("app", [
    "firebase",
    "ngSanitize",
    "ngRoute",
    "ngStorage",
    "luegg.directives"
  ]);

  app.constant(
    "FIREBASE_URL",
    "https://chatowls.firebaseio.com"
  );

  app.constant(
    "TRANSLATE_URL",
    "https://translate.yandex.net/api/v1.5/tr.json/translate"
  );

  app.constant(
    "TRANSLATE_APIKEY",
    "trnsl.1.1.20141204T090257Z.23d0a0607bff2584.f2816ba8b99aafd0c78391b4154631a6e560c8cf"
  );

  app.config(function($logProvider) {
    $logProvider.debugEnabled(true);
  });

  app.config(function($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "/templates/login/login.html",
        controller: "LoginController"
      })
      .when("/login", {
        templateUrl: "/templates/login/login.html",
        controller: "LoginController"
      })
      .when("/messages", {
        templateUrl: "/templates/messages/messages.html",
        controller: "MessagesController"
      })
      .when("/logout", {
        templateUrl: "/templates/logout/logout.html",
        controller: "LogoutController"
      })
      .otherwise({
        redirectTo: "/"
      });
  });

}());
