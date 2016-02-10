var homeModule = angular.module('hotelligence.home', ['firebase.auth', 'firebase', 'firebase.utils', 'ui.router']);

homeModule.controller('HomeCtrl', ['$scope', 'user', '$firebaseObject', function ($scope, user, $firebaseObject) {
  var self = this;

  self.syncedValue = $firebaseObject(fbutil.ref('syncedValue'));
  self.user = user;
  // self.FBURL = FBURL;

  self.hello = 'hello';

}]);
