const { assert } = require('chai');
const throwIfTrue = require('../index.js');

describe('throw-if-true', () => {
  it('does not throw error if falsy', () => {
    assert.doesNotThrow(() => throwIfTrue(false));
  });

  it('throws Error with given message', () => {
    assert.throws(() => throwIfTrue(true, 'custom'), Error, 'custom');
  });

  it('throws custom Error with given message', () => {
    assert.throws(() => throwIfTrue(true, RangeError, 'custom'), RangeError, 'custom');
  });
});
