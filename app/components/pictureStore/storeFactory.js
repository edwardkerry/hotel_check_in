'use strict';

angular.module('myApp.pictureStore', ['firebase', 'firebase.utils', 'firebase.auth'])
  .factory('Store', function() {

    return {
      saveInDb: function(authData) {

        Webcam.snap(function(data, authData) {
          var ref = new Firebase("https://hotel-check-in.firebaseio.com");
          var uid = ref.getAuth().uid;
          console.log(uid);
          var ref = new Firebase('https://hotel-check-in.firebaseio.com/users/' + uid);
          // user.child(uid).set({image: data});
          ref.update({
            image: data
          });
        });
      }
    };
  });


// fredRef.child('name').set({ first: 'Fred', last: 'Flintstone' });
