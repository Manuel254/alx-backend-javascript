const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function() {
  it('test round of a', function() {
    assert.equal(calculateNumber(1.2, 4), 5);
    assert.equal(calculateNumber(-1.5, 5), 4);
  });
  it('test round of b', function() {
    assert.equal(calculateNumber(1, 4.5), 6);
    assert.equal(calculateNumber(3, -5), -2);
  });
  it('test round of both a and b', function() {
    assert.equal(calculateNumber(1, 4), 5);
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
