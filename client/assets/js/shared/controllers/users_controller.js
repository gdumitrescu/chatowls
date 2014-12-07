/* global app */

"use strict";

app.controller("UsersController", function($scope, $firebase, FIREBASE_URL,RoomService) {

	$scope.rooms = [];

	var ref = new Firebase(FIREBASE_URL + "/rooms");
	ref.on("child_added", function(snapshot) {
	   	var room = {'id': snapshot.key(),'name':snapshot.val().title, 'by':snapshot.val().createdByName};
	  	$scope.$apply(function(){
	  		$scope.rooms.push(room);
	    });
	});
	
	$scope.joinRoom = function(room){
		var data = JSON.parse(localStorage.getItem("currentUser"));
		data.room = room;
		localStorage.setItem("currentUser", JSON.stringify(data));
		RoomService().joinRoom(room);
	};
	
	$scope.showaddroom = function(){
		document.querySelector("#member-box").style.display = "none";
		document.querySelector("#room-box").style.display = "block";
	};

});
