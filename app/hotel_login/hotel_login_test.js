
describe('myApp.hotel_login', function() {
  beforeEach(function() {
    module('myApp');
    module('myApp.hotel_login');
  });

  describe('HotelLoginCtrl', function() {
    var hotelLoginCtrl, $scope;
    beforeEach(function() {
      inject(function($controller) {
        $scope = {};
        loginCtrl = $controller('HotelLoginCtrl', {$scope: $scope});
      });
    });

    it('should define login function', function() {
      expect(typeof $scope.login).toBe('function');
    });

    it('should define createAccount function', function() {
      expect(typeof $scope.createAccount).toBe('function');
    });
  });
});
