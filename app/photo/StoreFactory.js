myApp.factory('Store', function() {
  return {
    saveInDb: function() {
      Webcam.snap(function(data) {
        var user = new Firebase('https://hotel-check-in.firebaseio.com/users/' +  user.uid)
        user.update({image: data})
      })
    }
  };
});
