describe('User Dash', function() {

  beforeEach(function() {
    browser.get('index.html#/userDash');
  });

  it('should render user dash when user navigates to /userDash', function() {
    expect(element.all(by.css('[ng-view] h2')).first().getText()).
      toMatch(/Welcome to your Dashboard/);
  });
});
