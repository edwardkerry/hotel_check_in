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

      //////////// get all uids in array to show each image and fix the
      // self.bookingsArray = $firebaseArray(db.child('users').child(uid).child('bookings'));
      $firebaseArray(db.child('users').child(uid).child('bookings')).$loaded().then(function(bookingsArray) {
        // console.log(bookingsArray);
        self.bookingsArray = bookingsArray;
        // console.log(self.bookingsArray);
        //// create array of status


        // create array of bookings ids
        angular.forEach(self.bookingsArray, function(booking) {
          // console.log('booking fore each:!!!!!: ' + booking);
          self.bookingsIdArray.push(booking.guestUid);
        });

        console.log(self.bookingsIdArray);

        // angular.forEach(self.bookingsIDArray, function(uid) {
        //   console.log('booking check in each:!!!!!: ' + uid);
        //   // var thisCheckIn = self.getCheckInStatus(uid);
        //   // self.bookingsCheckInArray.push(thisCheckIn);
        // });

        console.log('bookingscheckInArray' + self.bookingsCheckInArray);

        var imageIndex = 0;
        angular.forEach(self.bookingsIdArray, function(bookingUserID, imageIndex) {
          var userImage = DatabaseFactory.getUserImage(bookingUserID);
          DatabaseFactory.getCheckedInStatus(bookingUserID).then(function(userStatus) {
            console.log("in dt");
            console.log('final userStatus');
            console.log(userStatus);
            // console.log(userImage);
            db.child('users').child(uid).child('bookings').child(imageIndex).update({
              checked_in: userStatus
            });
            self.bookingsCheckInArray.push(userStatus);

            DatabaseFactory.getUserImage(bookingUserID).then(function(image) {
              db.child('users').child(uid).child('bookings').child(imageIndex).update({
                photos: image
              });
              self.bookingsDocImageArray.push(userImage);
            });

            imageIndex++;
          });

        });
        // console.log(self.bookingsDocImageArray);
      });

      //
      //
      self.updateRoomNumber = function(newValue, index) {
        db.child('users').child(uid).child('bookings').child(index).update({
          room_number: newValue
        });
      };

      self.updateCheckedIn = function(newValue, index) {
        db.child('users').child(uid).child('bookings').child(index).update({
          checked_in: newValue
        });
      };

      self.getImageAvatar = function(uid) {
        var photoAnswer = DatabaseFactory.getUserImage(uid);
        photoAnswer.then(function(answerFinal) {
          self.images = answerFinal;
        });
        return self.images;
      };

      self.getCheckInStatus = function(uid) {
        console.log('checkinStatus method triggered');
        var checkInAnswer = DatabaseFactory.getCheckedInStatus(uid);
        checkInAnswer.then(function(answerCheckFinal) {
          var checkInStatus = answerCheckFinal;
        });
        return checkInStatus;
      };

    }

  ]);
})(angular);
