myApp.controller('photoController', ['Store', function(Store){
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
    Store.saveInDb();
  };

}]);
