/* global app */

"use strict";

app.controller("UsersController", function($scope, $firebase) {

	$scope.users = [];
	var list = [];

	var ref = new Firebase("https://chatowls.firebaseio.com/users");
	
  
	ref.orderByChild("expires").on("child_added", function(snapshot) {
	  if(snapshot.val().provider == "facebook" && snapshot.val().facebook.cachedUserProfile.locale != undefined){
	  	//console.log(snapshot.val().facebook.cachedUserProfile.first_name + " uses " + snapshot.val().facebook.cachedUserProfile.locale + " language");
	  	var user = { 'name': snapshot.val().facebook.cachedUserProfile.first_name , 'lang' : snapshot.val().facebook.cachedUserProfile.locale, 'provider' : 'facebook'};
	  	$scope.$apply(function(){
	  		$scope.users.push(user);
	  	});
	  }
	  else if (snapshot.val().provider == "github" && snapshot.val().github.cachedUserProfile.location != undefined){
	  	//console.log(snapshot.val().twitter.cachedUserProfile.login + " is in " + snapshot.val().github.cachedUserProfile.location + " " );
	  	var user = { 'name': snapshot.val().twitter.cachedUserProfile.login , 'lang' : snapshot.val().github.cachedUserProfile.location, 'provider':'github'};
	  	$scope.$apply(function(){
	  		$scope.users.push(user);
	  	});
	  }
	  else if (snapshot.val().provider == "twitter" && snapshot.val().twitter.cachedUserProfile.lang != undefined){
	  	//console.log(snapshot.val().twitter.cachedUserProfile.name + " uses " +  snapshot.val().twitter.cachedUserProfile.lang + " "  );
	  	var user = {'name': snapshot.val().twitter.cachedUserProfile.name , 'lang' : snapshot.val().twitter.cachedUserProfile.lang, 'provider':'twitter'};
	  	$scope.$apply(function(){
	  		$scope.users.push(user);
	   });
	  }
	  else if (snapshot.val().provider == "google" && snapshot.val().google.cachedUserProfile.locale != undefined){
	  	//console.log(snapshot.val().google.cachedUserProfile.given_name+ " uses " + snapshot.val().google.cachedUserProfile.locale + " language");
	  	var user = {'name':snapshot.val().google.cachedUserProfile.given_name, 'lang':snapshot.val().google.cachedUserProfile.locale, 'provider':'google' };
	  	$scope.$apply(function(){
	  		$scope.users.push(user);
	    });
	  }
	  else {
	  	console.log("Unknown to retieve "+snapshot.val());
	  }
	});



	console.log($scope.users);
	

});
