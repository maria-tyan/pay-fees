const cashIn = require('../../calculations/cashIn');

describe('Fees calculation for Cash In', () => {
  test('It must be no more than 5.00 EUR', () => {
    expect(cashIn(1000000.00)).toBeLessThanOrEqual(5);
  });

  test('It must be 0.03%', () => {
    expect(cashIn(200.00)).toBeCloseTo(0.15);
  });
});
