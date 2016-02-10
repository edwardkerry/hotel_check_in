describe('factory: Store', function() {

  var store;

  beforeEach(module('hotelligence'));

  beforeEach(inject(function(Store) {
    store = Store;
  }));

  it('responds to snap', function() {
    expect(store.snap).toBeDefined();
  });

});
