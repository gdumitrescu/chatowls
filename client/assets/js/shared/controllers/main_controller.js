app.controller('MainController', function($scope, $rootScope, $location, AuthenticationService, FIREBASE_URL, CHATOWLS_ROOM_ID){

  $scope.currentUser = null;
  $rootScope.currentUser = null;

  var chat = new Firechat(new Firebase(FIREBASE_URL + "/chat"));


  $rootScope.$watch("currentUser", function (data){
    $scope.currentUser = data;
  });

  $scope.$on('user.logged_in', function (){
    console.log('user.logged_in', $rootScope.currentUser);
    // roominify()
  });

  function roominify() {
    chat.setUser($rootScope.currentUser.uid, $rootScope.currentUser.name);
    console.log(window._chat = chat);
    console.log(window._room = CHATOWLS_ROOM_ID);
    // chat.enterRoom(CHATOWLS_ROOM_ID);
    console.log('entered room...');
    $rootScope.$broadcast('user.entered_room', chat);
    console.log(' $broadcast user.entered_room');
  }

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
