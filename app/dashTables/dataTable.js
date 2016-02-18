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
      self.bookings = $firebaseObject(db.child('users').child(uid).child('bookings'));

      self.bookings.$bindTo($scope, 'booking')
        .then(function() {
          console.log("bound");
        });

      //////////// get all uids in array to show each image and fix the
      // self.bookingsArray = $firebaseArray(db.child('users').child(uid).child('bookings'));
      $firebaseArray(db.child('users').child(uid).child('bookings')).$loaded().then(function(bookingsArray) {
        console.log(bookingsArray);
        self.bookingsArray = bookingsArray;
        console.log(self.bookingsArray);

        angular.forEach(self.bookingsArray, function(booking) {
          console.log('booking fore each:!!!!!: ' + booking);
          self.bookingsIdArray.push(booking.guestUid);
        });
        console.log(self.bookingsIdArray);

        var imageIndex = 0;
        angular.forEach(self.bookingsIdArray, function(bookingUserID, imageIndex) {
          console.log('bookingID fore each:!: ' + bookingUserID);
          var userImage = DatabaseFactory.getUserImage(bookingUserID);
          console.log(userImage);
          self.bookingsDocImageArray.push(userImage);
          console.log('INDEX:' + imageIndex);
          console.log(uid);
          // userImage = angular.fromJson(angular.toJson(userImage));
          console.log(userImage);
          // userImage = angular.copy(userImage)
          db.child('users').child(uid).child('bookings').child(imageIndex).update({
            // photos: userImage
            photos: 'heloo'
          });
          imageIndex++;
        });
        console.log(self.bookingsDocImageArray);
      });
      // dubug pursposes of image singles
      // var image0 =  DatabaseFactory.getUserImage(self.bookingsIdArray[0]);
      // var image1 =  DatabaseFactory.getUserImage(self.bookingsIdArray[1]);
      //   $firebaseObject(db.child('users').child(self.bookingsIdArray[0]).child('image')).$loaded().then(function(image) {
      //     console.log(image);
      //   });
      //   $firebaseObject(db.child('users').child(self.bookingsIdArray[1]).child('image')).$loaded().then(function(image) {
      //    console.log(image);
      //  });
      //
      // console.log(self.bookingsIdArray[0]);
      // console.log(self.bookingsIdArray[1]);


      //du bugend
      //
      //



      // self.collectBookingUserUids = function() {
      //   console.log('inside collect bookings');
      //   // for (var i = 0; i < self.bookingsArray.length; i++) {
      //   //   console.log(self.bookingsArray[i]);
      //   //   self.bookingsIdArray.push(self.bookingsArray[i].guestUid);
      //   // }
      //   angular.forEach(self.bookingsArray, function(booking) {
      //     console.log('booking fore each:!!!!!: '+booking);
      //     self.bookingsIdArray.push(booking.guestUid);
      //   });
      // };
      //
      //
      self.updateRoomNumber = function(newValue,index) {
        db.child('users').child(uid).child('bookings').child(index).update({
          room_number: newValue
        });
      };
      // self.updateRoomNumber = function(newValue,bookingArrayIndex) {
      //   // console.log('!!!!!!!!!!!!!!!!!!!ALERT'+newValue);
      //   console.log(bookingArrayIndex);
      //   db.child('users').child(uid).child('bookings').child(bookingArrayIndex).update({
      //     room_number: newValue
      //   });
      // };

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
