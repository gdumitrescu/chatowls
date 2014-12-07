app.controller('MainController', function($scope, $rootScope, $location, AuthenticationService, FirebaseURL){

  $scope.currentUser = null;
  $rootScope.currentUser = null;
  var chat = new Firechat(new Firebase(FirebaseURL + "chat"));

  $rootScope.$watch('currentUser', function(data, o){
    if(data) {

      $scope.currentUser = data;
      chat.setUser(data.uid, data.name);
      console.log(data, $rootScope.defaultRoomId, self._chat = chat);

      try {
        if($rootScope.defaultRoomId) {
          console.log("1");
          chat.enterRoom($rootScope.defaultRoomId);
        } else {
          console.log("2");
          chat.createRoom('chatowls', 'public', function (roomId){
            console.log("3", roomId);
            $rootScope.defaultRoomId = roomId;
            chat.enterRoom(roomId);
            chat.getUsersByRoom(roomId, function (){
              console.log(arguments, "4");
            });
          });
        }
      } catch(e) {};

    }

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
