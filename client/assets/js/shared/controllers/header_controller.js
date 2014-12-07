app.controller('HeaderCtrl', function($scope, AuthenticationService){
  $scope.unauth = function(){
    AuthenticationService().unauth();
  };
});
