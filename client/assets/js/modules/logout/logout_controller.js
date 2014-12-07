app.controller('LogoutController', function($scope, AuthenticationService) {
  $scope.$on("$viewContentLoaded", function(){
	 AuthenticationService().unauth();
  });
});
