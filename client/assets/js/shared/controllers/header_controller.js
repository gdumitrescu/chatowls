app.controller('HeaderCtrl', function($scope, AuthenticationService){
  $scope.unauth = function(){
    console.log(AuthenticationService().unauth());
  };
});
