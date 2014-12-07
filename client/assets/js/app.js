"use strict";

var app = angular.module('app', ["firebase", "ngSanitize", "ngRoute"]);

app.config(function($logProvider) {
  $logProvider.debugEnabled(true);
});

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/login/login.html',
      controller: 'LoginController'
    })
    .when('/login', {
      templateUrl: '/templates/login/login.html',
      controller: 'LoginController'
    })
    .when('/messages', {
      templateUrl: '/templates/messages/messages.html',
      controller: 'MessagesController'
    })
    .when('/logout', {
      templateUrl: '/templates/logout/logout.html',
      controller: 'LogoutController'
    })
    .otherwise({
      redirectTo: '/'
    });
});


// app.run(["$rootScope", "$location", function($rootScope, $location) {
//   $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
//     // We can catch the error thrown when the $requireAuth promise is rejected
//     // and redirect the user back to the home page
//     if (error === "AUTH_REQUIRED") {
//       $location.path("/");
//     }
//   });
// }]);


// // // for ui-router
// // app.run(["$rootScope", "$state", function($rootScope, $state) {
// //   $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
// //     // We can catch the error thrown when the $requireAuth promise is rejected
// //     // and redirect the user back to the home page
// //     if (error === "AUTH_REQUIRED") {
// //       $state.go("messages");
// //     }
// //   });
// // }]);

// // app.config(["$stateProvider", function ($stateProvider) {
// //   $stateProvider
// //     .state("home", {
// //       // the rest is the same for ui-router and ngRoute...
// //       controller: "MessagesCtrl",
// //       templateUrl: "templates/messages.html",
// //       resolve: {
// //         // controller will not be loaded until $waitForAuth resolves
// //         // Auth refers to our $firebaseAuth wrapper in the example above
// //         "currentAuth": ["Auth", function(Auth) {
// //           // $waitForAuth returns a promise so the resolve waits for it to complete
// //           return Auth.$waitForAuth();
// //         }]
// //       }
// //     })
// //     .state("messages", {
// //       // the rest is the same for ui-router and ngRoute...
// //       controller: "MessagesCtrl",
// //       templateUrl: "templates/messages.html",
// //       resolve: {
// //         // controller will not be loaded until $requireAuth resolves
// //         // Auth refers to our $firebaseAuth wrapper in the example above
// //         "currentAuth": ["Auth", function(Auth) {
// //           // $requireAuth returns a promise so the resolve waits for it to complete
// //           // If the promise is rejected, it will throw a $stateChangeError (see above)
// //           return Auth.$requireAuth();
// //         }]
// //       }
// //     });
// // }]);
