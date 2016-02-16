(function(angular) {
  'use strict';

  // var app = angular.module('hotelligence.dataTable',['firebase', 'firebase.utils','firebase.auth','ngRoute',

  var app = angular.module('hotelligence.dataTable', ['firebase', 'firebase.utils', 'firebase.auth', 'ngRoute', 'datatables']);

  app.controller('DataTableCtrl', ['$firebaseArray', '$firebaseObject', 'fbutil', '$location',
    function DataTableCtrl($firebaseArray, $firebaseObject) {
      var self = this;
      var db = new Firebase('https://hotel-check-in.firebaseio.com/');
      var uid = db.getAuth().uid;

      // get bookings function
      $firebaseArray(db.child('users').child(uid).child('bookings')).$loaded().then(function(bookings) {
        var hotelBookings = bookings;
        self.bookings = hotelBookings;
      });


      // get image function
      self.getImageAvatar = function(uid) {
        var self = this;
        var db = new Firebase('https://hotel-check-in.firebaseio.com/');
        $firebaseObject(db.child('users').child(uid).child('image')).$loaded().then(function(image) {
          self.images = image.$value;
          return image.$value;
        });

      };

    }
  ]);
})(angular);
