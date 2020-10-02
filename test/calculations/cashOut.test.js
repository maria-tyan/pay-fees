const cashOut = require('../../calculations/cashOut');

describe('Fees calculation for Cash Out by Legal persons', () => {
  test('It must be not less than 0.50 EUR', () => {
    expect(cashOut(50.00)).not.toBeLessThan(0.50);
  });

  test('It must be 0.3%', () => {
    expect(cashOut(300.00)).toBeCloseTo(0.90);
  });
});

describe('Fees calculation for Cash Out by Natural Persons', () => {
  test('It must be not less than 0.50 EUR', () => {
    expect(cashOut(30000)).toBe(87.00);
  });

  test('It must be free of free of charge', () => {
    expect(cashOut(1000.00)).toBe(0.00);
  });
});
