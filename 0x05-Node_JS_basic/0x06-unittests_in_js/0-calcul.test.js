const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function() {
  it('should return 4', function() {
    const result = calculateNumber(1, 3);
    assert.equal(result, 4);
  });
  it('should return 5', function() {
    const result = calculateNumber(1, 3.7);
    assert.equal(result, 5);
  });
  it('should return 5', function() {
    const result = calculateNumber(1.2, 3.7);
    assert.equal(result, 5);
  });
  it('should return 6', function() {
    const result = calculateNumber(1.5, 3.7);
    assert.equal(result, 6);
  });
  it('should return 3', function() {
    const result = calculateNumber(-1, 4);
    assert.equal(result, 3);
  });
  it('should return 0', function() {
    const result = calculateNumber(-1, 0.5);
    assert.equal(result, 0);
  });
  it('should return -4', function() {
    const result = calculateNumber(-1, -3);
    assert.equal(result, -4);
  });
  it('should return 3', function() {
    const result = calculateNumber(-1, 3.7);
    assert.equal(result, 3);
  });
  it('should return -4', function() {
    const result = calculateNumber(-1, -3.7);
    assert.equal(result, -4);
  });
  it('should return -5', function() {
    const result = calculateNumber(-1.5, -3.7);
    assert.equal(result, -5);
  });
});
