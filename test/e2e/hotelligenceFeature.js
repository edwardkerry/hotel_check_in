describe('Hotelligence', function() {

  it('Should display the correct title', function() {
    browser.get('http://localhost:8080/app/');
    expect(browser.getTitle()).toEqual('Hotelligence');
  });

});
