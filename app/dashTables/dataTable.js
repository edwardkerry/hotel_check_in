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
      self.bookingsIdArray = [];
      self.bookingsDocImageArray = [];
      self.bookingsCheckInArray = [];
      self.bookingsArray = [];
      self.bookings = $firebaseObject(db.child('users').child(uid).child('bookings'));

      self.bookings.$bindTo($scope, 'booking')
        .then(function() {
          console.log("bound");
        });

      $firebaseArray(db.child('users').child(uid).child('bookings')).$loaded().then(function(bookingsArray) {

        self.bookingsArray = bookingsArray;

        angular.forEach(self.bookingsArray, function(booking) {

          self.bookingsIdArray.push(booking.guestUid);
        });

        console.log(self.bookingsIdArray);
        console.log('bookingscheckInArray' + self.bookingsCheckInArray);

        var imageIndex = 0;
        angular.forEach(self.bookingsIdArray, function(bookingUserID, imageIndex) {
          var userImage = DatabaseFactory.getUserImage(bookingUserID);
          DatabaseFactory.getCheckedInStatus(bookingUserID).then(function(userStatus) {

            console.log(userStatus);
            self.bookingsCheckInArray.push(userStatus);
            imageIndex++;
          });

        });

      });

      self.updateRoomNumber = function(newValue, index) {
        db.child('users').child(uid).child('bookings').child(index).update({
          room_number: newValue
        });
      };

      self.getImageAvatar = function(uid) {
        var photoAnswer = DatabaseFactory.getUserImage(uid);
        photoAnswer.then(function(answerFinal) {
          self.images = answerFinal;
        });
        return self.images;
      };


    }

  ]);
})(angular);
