app.controller('HeaderController', function($scope, AuthenticationService){
  $scope.unauth = function(){
    AuthenticationService().unauth();
  };
});
