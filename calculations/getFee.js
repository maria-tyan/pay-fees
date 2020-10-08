const rounding = require('./rounding');
const calculateWeekLimit = require('./calculateWeekLimit');

function getFee(transaction, feeConfiguration) {
  // calculate default commission
  let fullFee = transaction.operation.amount * feeConfiguration.percents * 0.01;

  // if MAX limit exists for this operation
  if (feeConfiguration.max) {
    fullFee = (fullFee > feeConfiguration.max.amount) ? 5.00 : fullFee;
  }
  // if MIN limit exists for this operation
  if (feeConfiguration.min) {
    fullFee = (fullFee > feeConfiguration.min.amount) ? fullFee : 0.50;
  }
  // if WEEK_LIMIT exists for this operation
  if (feeConfiguration.week_limit) {
    fullFee = calculateWeekLimit(transaction, feeConfiguration);
  }
  return rounding(fullFee);
}

module.exports = getFee;