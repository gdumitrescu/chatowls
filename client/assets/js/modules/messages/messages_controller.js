app.controller('MessagesCtrl', function MessagesCtrl($scope, $firebase, $log) {

  $scope.$watch('msg', function(){
    $log.log(arguments);
  });

});

