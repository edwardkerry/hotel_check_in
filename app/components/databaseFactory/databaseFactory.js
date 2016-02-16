'use strict';

angular.module('hotelligence.databaseFactory', ['firebase', 'firebase.utils', 'firebase.auth'])
  .factory('DatabaseFactory', function() {
    // var self = this;
    return {
      retrieveUserImageInDbUser: function(uid) {
        // var self = this;
        var db = new Firebase('https://hotel-check-in.firebaseio.com/');
        $firebaseObject(db.child('users').child(uid).child('image')).$loaded().then(function(image) {
          // this.images = image.$value;
          return image.$value;
        });

      }
    };
  });
