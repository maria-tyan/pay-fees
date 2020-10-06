function rounding(number) {
  // rounding to upper bound
  return (Math.ceil(number * 100) / 100).toFixed(2);
}
module.exports = rounding;
