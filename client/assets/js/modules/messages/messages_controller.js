/* global app */

"use strict";

app.controller("MessagesController", function($scope, $http, $firebase, $localStorage, TRANSLATE_URL, TRANSLATE_APIKEY,TranslationService) {
	
  $scope.$watch('msg', function(){
     // $log.log(arguments);

     var profile = JSON.parse(localStorage.getItem("currentUser"));
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
			$scope.msg = "";
        }
  }
  $scope.showmem = function(){
	document.querySelector("#room-box").style.display = "none";
	document.querySelector("#member-box").style.display = "block";
  };
	
  $scope.hidemem = function(){
		document.querySelector("#member-box").style.display = "none";
  };
});
