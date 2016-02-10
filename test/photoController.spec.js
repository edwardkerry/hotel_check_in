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

    describe('#takePhoto', function() {

      it('should tell the webcam to freeze', function(){
        spyOn(Webcam, 'freeze');
        ctrl.takePhoto();
        expect(Webcam.freeze).toHaveBeenCalled();
      });

      it('should set moreButtons to be true', function(){
        ctrl.takePhoto();
        expect(ctrl.moreButtons).toBeTruthy();
      });
    });

    describe('#retakePhoto', function() {

      it('should unfreeze the webcam', function() {
        spyOn(Webcam, 'unfreeze');
        ctrl.retakePhoto();
        expect(Webcam.unfreeze).toHaveBeenCalled();
      });

      it('should set moreButtons to be false', function() {
        ctrl.retakePhoto();
        expect(ctrl.moreButtons).toBeFalsy();
      });

    });

  });
});
