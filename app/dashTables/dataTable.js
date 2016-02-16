(function(angular) {
  'use strict';

  // var app = angular.module('hotelligence.dataTable',['firebase', 'firebase.utils','firebase.auth','ngRoute',

  var app = angular.module('hotelligence.dataTable', ['firebase', 'firebase.utils', 'firebase.auth', 'ngRoute', 'datatables','hotelligence.databaseFactory']);

  app.controller('DataTableCtrl', ['$firebaseArray', '$firebaseObject', 'fbutil', '$location','DatabaseFactory',
    function DataTableCtrl($firebaseArray, $firebaseObject, DatabaseFactory) {
      var self = this;
      var db = new Firebase('https://hotel-check-in.firebaseio.com/');
      var uid = db.getAuth().uid;

      // get bookings function
      $firebaseArray(db.child('users').child(uid).child('bookings')).$loaded().then(function(bookings) {
        var hotelBookings = bookings;
        self.bookings = hotelBookings;
      });


      // get image function
      self.getImageAvatar2 = function(uid) {
        var self = this;
        var db = new Firebase('https://hotel-check-in.firebaseio.com/');
        $firebaseObject(db.child('users').child(uid).child('image')).$loaded().then(function(image) {
          self.images = image.$value;
          return image.$value;
        });

      };

      self.getImageAvatar = function(uid) {
         var self = this;
         console.log(DatabaseFactory.sayHello());
         console.log(DatabaseFactory.retrieveUserImageInDbUser(uid));
         //self.images = retrieveUserImageInDbUser(uid).$value;
         //return DatabaseFactory.retrieveUserImageInDbUser(uid);
      };

    }
  ]);
})(angular);
