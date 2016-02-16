(function(angular) {
  "use strict";

  var app = angular.module('hotelligence.userDash', ['firebase.auth', 'firebase', 'firebase.utils', 'ngRoute']);

  app.controller('userDashController', ['$scope', 'fbutil', 'user', '$firebaseObject', 'FBURL', function ($scope, fbutil, user, $firebaseObject, FBURL) {
    $scope.syncedValue = $firebaseObject(fbutil.ref('syncedValue'));
    $scope.user = user;
    $scope.FBURL = FBURL;
  }]);

  app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/userDash', {
      templateUrl: 'userDash/userDash.html',
      controller: 'userDashController',
      resolve: {
        user: ['Auth', function (Auth) {
          return Auth.$waitForAuth();
        }]
      }
    });
  }]);

})(angular);
