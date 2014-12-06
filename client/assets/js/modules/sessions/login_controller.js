app.controller('LoginCtrl', function MessagesCtrl($scope, UserAuthenticationService) {

  $scope.authUsingFacebook = function(){
    UserAuthenticationService().authUsingFacebook();
  };

  $scope.authUsingTwitter = function(){
    UserAuthenticationService().authUsingTwitter();
  };

  $scope.authUsingGithub = function(){
    UserAuthenticationService().authUsingGithub();
  };

  $scope.authUsingGplus = function(){
    UserAuthenticationService().authUsingGplus();
  };

  $scope.unauth = function(){
    UserAuthenticationService().unauth();
  };
});


