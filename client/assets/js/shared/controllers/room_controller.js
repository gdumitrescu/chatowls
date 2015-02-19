/* global app */

(function() {

  "use strict";

  app.controller("RoomController",
    function(
      $window, $scope, $http, $firebase, $localStorage,
      RoomService) {

    $scope.makeRoom = function() {
      var rname = $scope.rname;
      if (typeof rname === "undefined") {
        $window.alert("Room name cannot be empty!");
      } else {
        new RoomService().createRoom(rname);
        window.location.href = "/";
      }
    };

    $scope.showmem = function() {
      document.querySelector("#room-box").style.display = "none";
      document.querySelector("#member-box").style.display = "block";
    };

    $scope.hidemem = function() {
      document.querySelector("#member-box").style.display = "none";
    };

    $scope.closeaddroom = function() {
      document.querySelector("#room-box").style.display = "none";
    };

  });

}());
