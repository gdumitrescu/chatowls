/* global app*/

"use strict";

app.factory("RoomService", function($log, $firebaseAuth, $location, $rootScope, $localStorage, FIREBASE_URL) {
  return function() {
    var that = this;

    var roomsRef = new Firebase(FIREBASE_URL + "/rooms");
      var profile = JSON.parse(localStorage.getItem('currentUser'));


    that.createRoom = function(room_name) {
      
         var newRoom = roomsRef.push({
             
            createdByName: profile.name,
            createdByUid: profile.uid,
            title: room_name,
            timestamp: Date.now(),
            members: [{'uid': profile.uid}]

          });
     console.log("generated room "+newRoom.key());
     return newRoom;
   }
   
	that.joinRoom = function(room_name) {
			 var room = roomsRef.child(room_name) , members = [];
			 room.child("members").on("child_added", function(snapshot){
					members[snapshot.key()] = snapshot.val();
			 });
			 for(var i=0; i < members.length; i++){
				if(members[i].uid == profile.uid) break;
			 }
			 
			 if(i == members.length) members.push({"uid" : profile.uid}); //to ensure not inserted again
			
			 room.update({
				members: members
			 });
	}
     

    return that;

  };
});
