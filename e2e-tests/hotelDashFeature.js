describe('Hotel Dash', function() {

  beforeEach(function() {
    browser.get('index.html#/hotelDash');
  });

  it('should render hotel dash when user navigates to /hotelDash', function() {
    expect(element.all(by.css('[ng-view] h2')).first().getText()).
      toMatch(/Welcome to your Hotelligence Dashboard/);
  });
});
