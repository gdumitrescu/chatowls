app.controller('LogoutController', function($scope, $localStorage, AuthenticationService) {
  $scope.$on("$viewContentLoaded", function(){
	 AuthenticationService().unauth();
  });
});
