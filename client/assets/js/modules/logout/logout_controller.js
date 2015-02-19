/* global app */

(function() {

  "use strict";

  app.controller("LogoutController",
    function($scope, $localStorage, AuthenticationService) {
      $scope.$on("$viewContentLoaded", function() {
        new AuthenticationService().unauth();
      });
    });

}());
