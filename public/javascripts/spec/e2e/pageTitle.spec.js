describe('Page Title', function() {

  it('Should display the correct title', function() {
    browser.get('http://localhost:3000');
    expect(browser.getTitle()).toEqual('Hotel Check In');
  });

});
