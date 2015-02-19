/* global app */

(function() {

  "use strict";

  app.controller("LoginController",
    function MessagesCtrl($scope, AuthenticationService) {

    $scope.authUsingFacebook = function() {
      new AuthenticationService().authUsingFacebook();
    };

    $scope.authUsingTwitter = function() {
      new AuthenticationService().authUsingTwitter();
    };

    $scope.authUsingGithub = function() {
      new AuthenticationService().authUsingGithub();
    };

    $scope.authUsingGplus = function() {
      new AuthenticationService().authUsingGplus();
    };

    $scope.unauth = function() {
      new AuthenticationService().unauth();
    };
  });

}());
