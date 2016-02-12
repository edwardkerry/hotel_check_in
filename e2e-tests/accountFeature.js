
 describe('account', function() {
    it('should redirect to /login if not logged in', function() {
       browser.get('index.html#/account');
       expect(browser.getLocationAbsUrl()).toMatch('/login');
    });
 });
