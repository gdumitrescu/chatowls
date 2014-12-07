/* global app */

"use strict";

app.controller("MessagesController", function($scope, $http ,$firebase) {
	
	 var APIKEY = "trnsl.1.1.20141204T090257Z.23d0a0607bff2584.f2816ba8b99aafd0c78391b4154631a6e560c8cf";
     var TRANSLATEURL = "https://translate.yandex.net/api/v1.5/tr.json/translate";

  $scope.$watch('msg', function(){
     // $log.log(arguments);

     var profile = JSON.parse(localStorage.getItem("currentUser"));
     var lang = profile.lang;
     var msg = "";
     if($scope.msg != undefined && $scope.msg != null )
     		msg = $scope.msg.replace(/(\r\n|\n|\r)/gm,"");

    $http(
     {
            url: TRANSLATEURL,
            method: 'GET',
            params:
            {
                lang: "en-"+lang,
                text: msg,
                key: APIKEY
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
