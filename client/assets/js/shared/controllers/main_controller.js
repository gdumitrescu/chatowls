app.controller('MainController', function($scope, $rootScope, $location, $localStorage, AuthenticationService){

  $scope.currentUser = null;
  $rootScope.currentUser = null;

  $rootScope.$watch('currentUser', function(n, o){
    if(n) $scope.currentUser = n;
  }, true);


  $rootScope.$on('$routeChangeStart', function() {

    try {
      if (!$rootScope.currentUser) $rootScope.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    } catch(e) {
      $rootScope.currentUser = null;
    }

    if (!$rootScope.currentUser) $location.path('/login');
    else
      if($location.path() === '/login' || $location.path() === '/') $location.path('/messages');

  });
});
