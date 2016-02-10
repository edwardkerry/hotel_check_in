describe('photoController', function(){
  beforeEach(function(){

  module('hotelligence');
});

describe('photoController', function(){

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('photoController');
  }));

  console.log(ctrl);
  // beforeEach(inject(function($controller){


  it('initialises without a user', function(){
    // ctrl = $controller('photoController');
    expect(ctrl.user).toBeUndefined();
  });
});

});
