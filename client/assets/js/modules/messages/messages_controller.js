/* global app */

"use strict";

app.controller("MessagesController", function($scope, $http, $firebase, $localStorage, TRANSLATE_URL, TRANSLATE_APIKEY) {
	
  $scope.$watch('msg', function(){
     // $log.log(arguments);

     var profile = JSON.parse(localStorage.getItem("currentUser"));
     var lang = profile.lang;
     var msg = "";
     if($scope.msg != undefined && $scope.msg != null )
     		msg = $scope.msg.replace(/(\r\n|\n|\r)/gm,"");

    $http(
     {
            url: TRANSLATE_URL,
            method: 'GET',
            params:
            {
                lang: lang,
                text: msg,
                key: TRANSLATE_APIKEY
            }
      }
    ).success(function(data) {
    	$scope.translatedText = data.text[0];
        console.log(data);
    });

  });

  $scope.send = function(keyEvent) {
        if( keyEvent.which == 13) {
                console.log("Submitting "+ $scope.translatedText);
	             		
				  		$scope.lines.push($scope.translatedText);
						$scope.msg = "";

        }
  }

});
