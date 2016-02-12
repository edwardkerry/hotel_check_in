'use-strict';

describe('my app', function() {

  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });

  describe('home', function() {

    beforeEach(function() {
      browser.get('index.html#/home');
    });

    it('should render home when user navigates to /home', function() {
      expect(element.all(by.css('[ng-view] h2')).first().getText()).
        toMatch(/Home/);
    });

    it('should have a title', function() {
      expect(browser.getTitle()).toEqual('Hotelligence');
    });

  });

  describe('hoteldash', function() {

    beforeEach(function() {
      browser.get('index.html#/hoteldash');
    });

    it('should render hoteldash when user navigates to /hoteldash', function() {
      expect(element.all(by.css('[ng-view] h2')).first().getText()).
        toMatch(/Welcome to your Hotelligence Dashboard/);
    });

  });

  describe('userDash', function() {

    beforeEach(function() {
      browser.get('index.html#/userDash');
    });

    it('should render home when user navigates to /userDash', function() {
      expect(element.all(by.css('[ng-view] h2')).first().getText()).
        toMatch(/Welcome to your Dashboard/);
    });

  });

   describe('account', function() {
      it('should redirect to /login if not logged in', function() {
         browser.get('index.html#/account');
         expect(browser.getLocationAbsUrl()).toMatch('/login');
      });
   });

   describe('login', function() {
      beforeEach(function() {
         browser.get('index.html#/login');
      });

      it('should render login when user navigates to /login', function() {
         expect(element.all(by.css('[ng-view] h2')).first().getText()).toMatch(/Login Page/);
      });
   });
});
