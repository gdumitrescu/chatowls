app.controller('MessagesCtrl', function MessagesCtrl($scope, $firebase) {

  $scope.$watch('msg', function(){
    console.log(arguments);
  });

});

