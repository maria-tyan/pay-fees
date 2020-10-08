const cashIn = require('../../calculations/cashIn');

describe('Fees calculation for Cash In', () => {
  const transaction1 = {
    date: '2016-01-05', user_id: 1, user_type: 'natural', type: 'cash_in', operation: { amount: 200.00, currency: 'EUR' },
  };
  test('It must be no more than 5.00 EUR', () => {
    expect(cashIn(transaction1)).toBeLessThanOrEqual(5);
  });

  test('It must be no more than 5.00 EUR', () => {
    expect(cashIn(1000000.00)).toBe(5);
  });

  test('It must be 0.03%', () => {
    expect(cashIn(200.00)).toBeCloseTo(0.15);
  });
});
