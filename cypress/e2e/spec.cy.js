describe('mocha behavior with multiple errors', function () {
  beforeEach(function () {
    throw new Error('error 1')
  })
  it('sample test', function () {

  })
  afterEach( function () {
    throw new Error('error 2')
  })
});
