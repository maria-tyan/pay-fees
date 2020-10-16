const { startOfWeek, format } = require('date-fns');

const weekHashData = [];

function getHash(transaction) {
  // returns hash string for the current transaction
  const date = new Date(transaction.date);
  return `${format(startOfWeek(date, { weekStartsOn: 1 }), 'MM/dd/yyyy')}_${transaction.user_id}`;
}

function addTransactionToHashArray(transaction) {
  // adds new object for each transaction
  weekHashData.push({
    hash: getHash(transaction),
    amount: transaction.operation.amount,
  });
}

function calculateWeekLimit(transaction, feeConfiguration) {
  // add new transaction to the hash
  addTransactionToHashArray(transaction);

  // get data for user per current week
  const weekSum = weekHashData
    .filter((hashItem) => hashItem.hash === getHash(transaction))
    .reduce(
      (a, b) => a + b.amount,
      0,
    );

  // if MAX per week exceeded
  if (weekSum > feeConfiguration.week_limit.amount) {
    let exceededAmount = 0;
    // calculate current exceeded amount
    if ((weekSum - transaction.operation.amount) >= feeConfiguration.week_limit.amount) {
      exceededAmount = transaction.operation.amount;
    } else {
      exceededAmount = transaction.operation.amount - feeConfiguration.week_limit.amount;
    }
    // calculate fee
    const fullFee = exceededAmount * feeConfiguration.percents * 0.01;
    return fullFee;
  }

  return 0;
}

module.exports = calculateWeekLimit;
