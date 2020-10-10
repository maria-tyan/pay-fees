const processing = require('../processing');
const readData = require('../dataGetters/readData');

const jsonData = readData(`./input.json`);

const data = [
  {
    date: '2016-01-06', user_id: 1, user_type: 'natural', type: 'cash_out', operation: { amount: 30000, currency: 'EUR' },
  },
  {
    date: '2016-01-07', user_id: 1, user_type: 'natural', type: 'cash_out', operation: { amount: 1000.00, currency: 'EUR' },
  },
  {
    date: '2016-01-07', user_id: 1, user_type: 'natural', type: 'cash_out', operation: { amount: 100.00, currency: 'EUR' },
  },
];

describe('Processing', () => {
  test('Check cash out with week limit', () => {
    return processing(data).then((result) => {
      expect(result).toStrictEqual(['87.00', '3.00', '0.30']);
    });
  });

  test('Check if output data has the same length', () => {
    return processing(jsonData).then((result) => {
      expect(result.length).toBe(jsonData.length);
    });
  });
});
