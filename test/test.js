const lib = require('../src');

describe('TESTS', () => {
  test('Basic test', (done) => {
    const result = lib.hello();

    expect(result).toBe('It works!');

    done();
  });
});
