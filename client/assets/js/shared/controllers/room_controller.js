/* global app */

"use strict";

app.controller("RoomController", function($scope, $http, $firebase, $localStorage, RoomService) {
	
	$scope.makeRoom = function(){
		var rname = $scope.rname;
		if(typeof rname === "undefined") alert("Room name cannot be empty!");
		else{
				RoomService().createRoom(rname);
				window.location.href = "/";
		}
	};
	
	$scope.showmem = function(){
		document.querySelector("#room-box").style.display = "none";
		document.querySelector("#member-box").style.display = "block";
	};
	
	$scope.hidemem = function(){
		document.querySelector("#member-box").style.display = "none";
	};
	
	$scope.closeaddroom = function(){
		document.querySelector("#room-box").style.display = "none";
	};
  
});
