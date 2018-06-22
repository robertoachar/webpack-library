const lib = require('../src');

describe('TESTS', () => {
  test('Basic test', () => {
    const result = lib.hello();

    expect(result).toBe('It works!');
  });
});
