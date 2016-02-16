angular.module('hotelligence.dataTable', ['datatables', 'firebase', 'firebase.utils', 'firebase.auth', 'ngRoute'])
  .controller('DataTableCtrl', ['$firebaseArray', '$firebaseObject', 'fbutil', '$location',

    function DataTableCtrl($firebaseArray, $firebaseObject, DatabaseFactory) {
      var self = this;
      self.imageArray = [];
      var db = new Firebase('https://hotel-check-in.firebaseio.com/');
      var uid = db.getAuth().uid;
      var bookingId = uid + '_hotelBookings;'
      console.log('id outside avater method :' + uid);

      $firebaseArray(db.child('users').child(uid).child('bookings')).$loaded().then(function(bookings) {
        var hotelBookings = bookings;
        console.log(hotelBookings);
        self.bookings = hotelBookings;
      });

      self.getImageAvatar = function(uid) {
        console.log('id inside :' + uid);
        console.log('image avatar function');
        var avatarFB = this;
        var db = new Firebase('https://hotel-check-in.firebaseio.com/');
        console.log('id inside :' + uid);

        $firebaseObject(db.child('users').child(uid).child('image')).$loaded().then(function(image) {
          console.log('image $value');
          console.log(image.$value);
          avatarFB.images = image.$value;
          return image.$value;
        });

      };

    }
  ]);
