app.controller('LoginCtrl', function MessagesCtrl($scope, AuthenticationService) {

  $scope.authUsingFacebook = function(){
    AuthenticationService().authUsingFacebook();
  };

  $scope.authUsingTwitter = function(){
    AuthenticationService().authUsingTwitter();
  };

  $scope.authUsingGithub = function(){
    AuthenticationService().authUsingGithub();
  };

  $scope.authUsingGplus = function(){
    AuthenticationService().authUsingGplus();
  };

  $scope.unauth = function(){
    AuthenticationService().unauth();
  };
});
