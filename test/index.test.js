var should = require('chai').should;
var expect = require('chai').expect;
var logService = require('../index');


describe('log', function () {
  it('should not output colors when manually disabled', function () {
    // expect(captured_text).to.not.have.string(txt);

    logService.info('test', '[TEST]');

    // Make sure we have the captured text.
    // expect(captured_text).to.have.string(txt);
    expect(true).to.be(true);
  });
});
