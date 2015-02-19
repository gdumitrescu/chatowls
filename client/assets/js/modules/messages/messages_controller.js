/* global app, Firebase */

(function() {

  "use strict";

  app.controller("MessagesController",
    function(
      $log, $scope, $http, $firebase, $localStorage,
      TRANSLATE_URL, TRANSLATE_APIKEY, TranslationService, RoomService) {

    $scope.$watch("msg", function() {

      var profile = JSON.parse(localStorage.getItem("currentUser"));
      var lang = profile.lang;
      var msg = "";
      if ($scope.msg !== undefined && $scope.msg !== null) {
        msg = $scope.msg.replace(/(\r\n|\n|\r)/gm, "");
      }

      TranslationService.translate(msg, lang, function(data) {
        $scope.translatedText = data;
      });

    });
    var messagesRef = new Firebase("https://chatowls.firebaseio.com/rooms/-Jca6PgRNzbfcOsj5lBR/messages");
    $scope.lines = [];

    messagesRef.on("child_added", function(snapshot) {
      var newMsg = snapshot.val();
      $log.debug("User: " + newMsg.user);
      $log.debug("Msg: " + newMsg.message);
      var profile = JSON.parse(localStorage.getItem("currentUser"));

      TranslationService.translate(newMsg.message, profile.lang, function(data) {
        $scope.lines.push({
          "msg": data,
          "user": newMsg.user,
          "time": newMsg.timestamp
        });
      });

    });

    $scope.send = function(keyEvent) {
      if (keyEvent.which === 13) {
        //$scope.lines.push($scope.translatedText);
        var profile = JSON.parse(localStorage.getItem("currentUser"));
        $log.debug("Translated text: " + $scope.translatedText);
        new RoomService().addMessage("-Jca6PgRNzbfcOsj5lBR", profile.uid, $scope.msg);
        $scope.msg = "";
      }

    };

  });

}());
