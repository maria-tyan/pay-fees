const rounding = require('./rounding');
const calculateWeekLimit = require('./calculateWeekLimit');

function getFee(transaction, feeConfiguration) {
  // calculate default commission
  let fullFee = transaction.operation.amount * feeConfiguration.percents * 0.01;

  // if MAX limit exists for this operation
  if (feeConfiguration.max) {
    fullFee = (fullFee > feeConfiguration.max.amount) ? feeConfiguration.max.amount : fullFee;
  }
  // if MIN limit exists for this operation
  if (feeConfiguration.min) {
    fullFee = (fullFee > feeConfiguration.min.amount) ? fullFee : feeConfiguration.min.amount;
  }
  // if WEEK_LIMIT exists for this operation
  if (feeConfiguration.week_limit) {
    fullFee = calculateWeekLimit(transaction, feeConfiguration);
  }
  // rounding to upper bound
  return rounding(fullFee);
}

module.exports = getFee;
