(function(angular) {
  "use strict";

  var app = angular.module('myApp.hoteldash', ['firebase.auth', 'firebase', 'firebase.utils', 'ngRoute']);

  app.controller('hoteldashController', ['$scope', 'fbutil', 'user', '$firebaseObject', 'FBURL', function ($scope, fbutil, user, $firebaseObject, FBURL) {
    $scope.syncedValue = $firebaseObject(fbutil.ref('syncedValue'));
    $scope.user = user;
    $scope.FBURL = FBURL;
  }]);

  app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/hoteldash', {
      templateUrl: 'hoteldash/hoteldash.html',
      controller: 'hoteldashController',
      resolve: {
        user: ['Auth', function (Auth) {
          return Auth.$waitForAuth();
        }]
      }
    });
  }]);

})(angular);
