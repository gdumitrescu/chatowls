app.controller('HeaderController', function($scope, AuthenticationService){
  $scope.unauth = function(){
    console.log(AuthenticationService().unauth());
  };
});
