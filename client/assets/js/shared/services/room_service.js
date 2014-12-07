/* global app, Firebase */

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
        members: [{
          'uid': profile.uid
        }]

      });
      console.log("generated room " + newRoom.key());
      return newRoom;
    };

    return that;

  };
});