/* global app, Firebase */

(function() {

  "use strict";

  app.factory("RoomService",
    function(
      $log, $firebaseAuth, $location, $rootScope, $localStorage,
      FIREBASE_URL) {

      return function() {
        var that = this;

        var roomsRef = new Firebase(FIREBASE_URL + "/rooms");
        var profile = JSON.parse(localStorage.getItem("currentUser"));


        that.createRoom = function(roomName) {
          var newRoom = roomsRef.push({

            createdByName: profile.name,
            createdByUid: profile.uid,
            title: roomName,
            timestamp: Date.now(),
            members: [{
              "uid": profile.uid
            }]

          });
          $log.debug("generated room " + newRoom.key());
          return newRoom;
        };

        that.joinRoom = function(roomName) {
          var room = roomsRef.child(roomName),
            members = [];
          room.child("members").on("child_added", function(snapshot) {
            members[snapshot.key()] = snapshot.val();
          });
          for (var i = 0; i < members.length; i++) {
            if (members[i].uid == profile.uid) {
              return;
            }
          }

          if (i == members.length) {
            members.push({
              "uid": profile.uid
            }); //to ensure not inserted again
          }

          room.update({
            members: members
          });
        };

        that.addMessage = function(roomName, userName, msg) {
          var room = roomsRef.child(roomName);
          var newMsg = room.child("messages").push({
            message: msg,
            user: userName,
            timestamp: Date.now()
          });
          return newMsg;
        };

        return that;

      };
    });

}());
