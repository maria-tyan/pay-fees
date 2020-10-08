const calculateWeekLimit = require('../../calculations/calculateWeekLimit');

const transaction1 = {
  date: '2016-01-06', user_id: 1, user_type: 'natural', type: 'cash_out', operation: { amount: 30000, currency: 'EUR' },
};

const transaction2 = {
  date: '2016-02-15', user_id: 1, user_type: 'natural', type: 'cash_out', operation: { amount: 300.00, currency: 'EUR' },
};

const feeConfiguration = {
  percents: 0.3,
  week_limit: {
    amount: 1000,
    currency: 'EUR',
  },
};

describe('calculateWeekLimit', () => {
  test('Commission must be calculated only from exceeded amount', () => {
    expect(calculateWeekLimit(transaction1, feeConfiguration)).toBe(87);
  });

  test('1000.00 EUR per week is free of charge', () => {
    expect(calculateWeekLimit(transaction2, feeConfiguration)).toBe(0);
  });
});
