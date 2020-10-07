const rounding = require('./rounding');

async function cashIn({ operation }) {
  const fullFee = operation.amount * 0.03 / 100;
  return rounding((fullFee > 5) ? 5.00 : fullFee);
}

module.exports = cashIn;
