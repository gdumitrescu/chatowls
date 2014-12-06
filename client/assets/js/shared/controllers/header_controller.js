app.controller('HeaderCtrl', function($scope, UserAuthenticationService){
  $scope.unauth = function(){
    console.log(UserAuthenticationService().unauth());
  };
});
