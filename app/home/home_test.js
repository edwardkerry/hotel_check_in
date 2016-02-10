describe('hotelligence.home', function(){
  beforeEach(module('hotelligence'));

  describe('the home module', function(){
    var homeCtrl;
    beforeEach(function(){
      inject(function($controller){
        homeCtrl = $controller('hotelligence.HomeCtrl');
      });
    });

    it('initialises with a string called hello', function(){
      console.log();
      expect(homeCtrl.hello).toEqual('hello');
    });

  });  //
  // describe('HomeCtrl', function() {
  //
  //   beforeEach(function() {
  //     module(function($provide) {
  //       $provide.value('user', {uid: 'test123'});
  //     });
  //
  //   inject(function($controller) {
  //     $scope = {};
  //     homeCtrl = $controller('HomeCtrl', {$scope: $scope});
  //   });
  //   });

    // it('assigns user in scope', function() {
    //   expect(typeof $scope.user).toBe('object');
    //   expect($scope.user.uid).toBe('test123');
    // });

});
