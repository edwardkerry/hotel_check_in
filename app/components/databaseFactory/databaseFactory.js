'use strict';

angular.module('hotelligence.databaseFactory', ['firebase', 'firebase.utils', 'firebase.auth'])

.factory('DatabaseFactory', function($firebaseObject) {
  var self = this;
  var db = new Firebase('https://hotel-check-in.firebaseio.com/');
  console.log('database factory called');
  return {

    createBookingInDb: function(uid) {

    },

    retrieveBookingInDb: function(uid) {

    },

    updateBookingInDb: function(uid) {

    },

    saveUserImage: function(uid) {

    },

    getUserImage: function(uid) {
      // console.log('triggered get image function');
      // console.log('firebase object:'+ $firebaseObject(db.child('users').child(uid).child('image')));
      return $firebaseObject(db.child('users').child(uid).child('image')).$loaded().then(function(image) {
        return image.$value;
      });
    }
  };
});


// Create
// create hotel/guest user uid
// create image of user
// create user account info
// create hotel account info
// create array hotel user bookings
// create array guest user reservations

// Retrieve
// retrieve hotel/guest user uid
// retrieve image of user
// retrieve user account info
// retrieve hotel account info
// retrieve array hotel user bookings
// retrieve array guest user reservations

//update
// update hotel/guest user uid
// update image of user
// update user account info
// update hotel account info
// update array hotel user bookings
// update array guest user reservations

// DELETE
// delete hotel/guest user uid
// delete image of user
// delte user account info
// delete hotel account info
// delete array hotel user bookings
// delete array guest user reservations
