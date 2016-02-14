'use strict';

angular.module('hotelligence', [
  'hotelligence.config',
  'hotelligence.security',
  'hotelligence.home',
  'hotelligence.account',
  'hotelligence.login',
  'hotelligence.hotel_login',
  'hotelligence.hoteldash',
  'hotelligence.userDash',
  'hotelligence.photo'


])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({
    redirectTo: '/home'
  });
}])

.run(['$rootScope', '$location', 'Auth', '$firebaseObject', function($rootScope, $location, Auth, $firebaseObject) {

  var thisUserType;
  var uid;
  Auth.$onAuth(function(user) {

    $rootScope.loggedIn = !!user;
    console.log(user.auth.uid);
    uid = user.auth.uid;
    var ref = new Firebase('https://hotel-check-in.firebaseio.com/');
    console.log(uid);
    $firebaseObject(ref.child('users').child(uid).child('userType')).$loaded().then(function(userType) {
      var thisUserType = userType.$value;
      console.log(thisUserType);
      $rootScope.userType = thisUserType;
    });

  });
}]);
