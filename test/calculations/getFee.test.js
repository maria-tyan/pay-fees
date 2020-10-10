const getFee = require('../../calculations/getFee');

const transaction1 = {
  date: '2016-01-05', user_id: 1, user_type: 'natural', type: 'cash_in', operation: { amount: 200.00, currency: 'EUR' },
};

const transaction2 = {
  date: '2018-12-01', user_id: 15, user_type: 'natural', type: 'cash_in', operation: { amount: 1.00, currency: 'EUR' },
};

const transaction3 = {
  date: '2019-03-25', user_id: 100, user_type: 'natural', type: 'cash_in', operation: { amount: 2004500000.00, currency: 'EUR' },
};

const transaction4 = {
  date: '2015-11-23', user_id: 20, user_type: 'juridical', type: 'cash_out', operation: { amount: 300.00, currency: 'EUR' },
};

const transaction5 = {
  date: '2016-01-06', user_id: 23, user_type: 'juridical', type: 'cash_out', operation: { amount: 1.00, currency: 'EUR' },
};

const transaction6 = {
  date: '2017-08-09', user_id: 2, user_type: 'juridical', type: 'cash_out', operation: { amount: 3099999990.00, currency: 'EUR' },
};

const transaction7 = {
  date: '2016-02-15', user_id: 901, user_type: 'natural', type: 'cash_out', operation: { amount: 300.00, currency: 'EUR' },
};

const transaction8 = {
  date: '2014-10-18', user_id: 1, user_type: 'natural', type: 'cash_out', operation: { amount: 1.00, currency: 'EUR' },
};

const transaction9 = {
  date: '2020-06-25', user_id: 1, user_type: 'natural', type: 'cash_out', operation: { amount: 9757508694.00, currency: 'EUR' },
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
  test('Cash In operations', () => {
    expect(getFee(transaction1, cashInFeeConf)).toBe('0.06');
    expect(getFee(transaction2, cashInFeeConf)).toBe('0.01');
    expect(getFee(transaction3, cashInFeeConf)).toBe('5.00');
  });

  test('Cash Out for Juridical person operations', () => {
    expect(getFee(transaction4, cashOutJuridicalFeeConf)).toBe('0.90');
    expect(getFee(transaction5, cashOutJuridicalFeeConf)).toBe('0.50');
    expect(getFee(transaction6, cashOutJuridicalFeeConf)).toBe('9299999.98');
  });

  test('Cash Out for Natural Persons operations', () => {
    expect(getFee(transaction7, cashOutNaturalFeeConf)).toBe('0.00');
    expect(getFee(transaction8, cashOutNaturalFeeConf)).toBe('0.00');
    expect(getFee(transaction9, cashOutNaturalFeeConf)).toBe('29272523.09');
  });
});
