const rounding = require('../../calculations/rounding');

describe('Roundings', () => {
  test('Fees must be ceiled', () => {
    expect(rounding(0.023)).toBeCloseTo(0.03);
  });
});
