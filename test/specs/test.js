var assert = require('assert');

describe('webdriver.io page', function() {
  it('should have the right title', function () {
    browser.url('http://localhost:8080');
    var title = browser.getTitle();
    assert.equal(title, 'Bug Reporting Sheet');
  });
});
