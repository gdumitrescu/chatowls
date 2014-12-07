/* global app */

"use strict";

app.controller("RoomController", function RoomController($scope, $http, $firebase, $localStorage) {

  $scope.showmem = function(){
    document.querySelector("#room-box").style.display = "none";
    document.querySelector("#member-box").style.display = "block";
  };

  $scope.hidemem = function(){
    document.querySelector("#member-box").style.display = "none";
  };

});
