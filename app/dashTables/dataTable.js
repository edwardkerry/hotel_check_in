(function(angular) {
  'use strict';

  var app = angular.module('hotelligence.dataTable', ['firebase',
    'firebase.utils', 'firebase.auth', 'ngRoute', 'datatables',
    'hotelligence.pictureStore', 'hotelligence.databaseFactory'
  ]);

  app.controller('DataTableCtrl', ['$scope', '$firebaseArray',
    '$firebaseObject', 'DatabaseFactory', 'fbutil', '$location',
    function DataTableCtrl($scope, $firebaseArray, $firebaseObject,
      DatabaseFactory, fbutil, $location) {
      var self = this;
      var db = new Firebase('https://hotel-check-in.firebaseio.com/');
      var uid = db.getAuth().uid;
      self.bookings = $firebaseObject(db.child('users').child(uid).child('bookings'));

      self.bookings.$bindTo($scope, 'booking')
        .then(function() {
          // var poo = new Firebase('https://hotel-check-in.firebaseio.com/users/');
          console.log("bound");
          console.log($scope.booking);
          // console.log($scope.bookings[0].room_number);
          //  $scope.bookings[0].room_number = "7777"; // will be saved to the database
          // db.child('users').child(uid).child('users').child('bookings').child(0).set({
          //   newUser: "0000"
          // });
        });

      self.alert = function(newValue) {
        console.log('!!!!!!!!!!!!!!!!!!!ALERT'+newValue);
        db.child('users').child(uid).child('bookings').child('0').update({
          room_number: newValue
        });
      };

      self.getImageAvatar = function(uid) {
        var self = this;
        var photoAnswer = DatabaseFactory.getUserImage(uid);
        photoAnswer.then(function(answerFinal) {
          self.images = answerFinal;
        });
        return self.images;
      };

    }

  ]);
})(angular);
