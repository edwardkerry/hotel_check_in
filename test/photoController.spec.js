describe('photoController', function() {
  beforeEach(function() {
    module('hotelligence');
  });

  describe('photoController', function() {
    var ctrl;

    beforeEach(inject(function($controller) {
      ctrl = $controller('photoController');
    }));

    it('initialises without a user', function() {
      expect(ctrl.user).toBeUndefined();
    });

    describe('#takephoto', function() {

      it('should tell the webcam to freeze', function(){
        spyOn(Webcam, "freeze");
        ctrl.takePhoto();
        expect(Webcam.freeze).toHaveBeenCalled();
      });

      it('should set more buttons to be true', function(){
        ctrl.takePhoto();
        expect(moreButtons).toBeTruthy();
      });
    });
  });
});
