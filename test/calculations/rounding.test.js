const rounding = require('../../calculations/rounding');

describe('Roundings', () => {
  test('Value must be ceiled', () => {
    expect(rounding(parseFloat(0.023))).toBe('0.03');
    expect(rounding(parseFloat(8.4581136))).toBe('8.46');
    expect(rounding(parseFloat(134578.00000001))).toBe('134578.01');
  });

  test('It must retutn formated 0', () => {
    expect(rounding(parseFloat(0))).toBe('0.00');
  });
});
