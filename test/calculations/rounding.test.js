const rounding = require('../../calculations/rounding');

describe('Roundings', () => {
  test('Fees must be ceiled', () => {
    expect(rounding(parseFloat(0.023))).toBe('0.03');
  });
});
