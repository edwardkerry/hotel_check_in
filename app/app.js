'use-strict';

var hotelligence = angular.module('hotelligence', ["firebase", "ui.router", "hotelligence.home"])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/app/home/home.html',
  });

  $urlRouterProvider.otherwise({
    redirectTo: '/home'
  });
}]);




        //   // resolve: {
    //   //   requireNoAuth: function($state, Auth) {
    //   //     return Auth.$requireAuth().then(function(auth) {
    //   //       $state.go('home');
    //   //     }, function(error) {
    //   //       return;
    //   //     });
    //   //   }
    //   // }
    // })
