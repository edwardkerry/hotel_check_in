hotelligence.controller('photoController', [function(){
  var self = this;

  this.takePhoto = function() {
    Webcam.freeze();
    self.moreButtons = true;
  };

  this.retakePhoto = function() {
    Webcam.unfreeze();
    self.moreButtons = false;
  };

  this.storePhoto = function() {
    var image = Webcam.snap(function(image) {
      return image;
    });
    console.log(image);
    Store.saveInDb(image);
  };

}]);
