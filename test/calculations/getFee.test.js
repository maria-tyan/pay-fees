const getFee = require('../../calculations/getFee');

const transaction1 = {
  date: '2016-01-05', user_id: 1, user_type: 'natural', type: 'cash_in', operation: { amount: 200.00, currency: 'EUR' },
};

const transaction2 = {
  date: '2016-01-06', user_id: 2, user_type: 'juridical', type: 'cash_out', operation: { amount: 300.00, currency: 'EUR' },
};

const transaction3 = {
  date: '2016-02-15', user_id: 1, user_type: 'natural', type: 'cash_out', operation: { amount: 300.00, currency: 'EUR' },
};

const cashInFeeConf = {
  percents: 0.03,
  max: {
    amount: 5,
    currency: 'EUR',
  },
};

const cashOutJuridicalFeeConf = {
  percents: 0.3,
  min: {
    amount: 0.5,
    currency: 'EUR',
  },
};

const cashOutNaturalFeeConf = {
  percents: 0.3,
  week_limit: {
    amount: 1000,
    currency: 'EUR',
  },
};

describe('Test example data', () => {
  test('Cash In operation', () => {
    expect(getFee(transaction1, cashInFeeConf)).toBe('0.06');
  });

  test('Cash Out for Juridical person operation', () => {
    expect(getFee(transaction2, cashOutJuridicalFeeConf)).toBe('0.90');
  });

  test('Cash Out for Natural Persons operation', () => {
    expect(getFee(transaction3, cashOutNaturalFeeConf)).toBe('0.00');
  });
});
