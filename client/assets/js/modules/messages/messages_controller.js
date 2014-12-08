/* global app */

"use strict";

app.controller("MessagesController", function($scope, $http, $firebase, $localStorage, TRANSLATE_URL, TRANSLATE_APIKEY,TranslationService,RoomService) {
	
  var profile = JSON.parse(localStorage.getItem("currentUser"));
  $scope.$watch('msg', function(){
     // $log.log(arguments);

     
     var lang = profile.lang;
     var msg = "";
     if($scope.msg != undefined && $scope.msg != null )
     		msg = $scope.msg.replace(/(\r\n|\n|\r)/gm,"");

     TranslationService.translate(msg,lang,function(data){
     	$scope.translatedText = data;
     })
    

  });

  $scope.send = function(keyEvent) {
        if( keyEvent.which == 13) {
        		$scope.lines.push($scope.translatedText);
            new RoomService().addMessage("-Jca6PgRNzbfcOsj5lBR",profile.uid,$scope.msg);
        	   $scope.msg = "";
             
             console.log("Added");
        }

  }
  
});
