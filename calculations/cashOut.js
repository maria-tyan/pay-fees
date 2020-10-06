const { getISOWeek, getYear } = require('date-fns');
const rounding = require('./rounding');

const weekHashData = [];

function getHash(transaction) {
  const date = new Date(transaction.date);
  return `${getISOWeek(date)}_${getYear(date)}_${transaction.user_id}`;
}

function addTransactionToHashArray(transaction) {
  weekHashData.push({
    hash: getHash(transaction),
    amount: transaction.operation.amount,
  });
}

function cashOutJuridical(transaction) {
  const fullFee = transaction.operation.amount * 0.003;
  return rounding((fullFee > 0.5) ? fullFee : 0.50);
}

function cashOutNatural(transaction) {
  // add new transaction to the hash
  addTransactionToHashArray(transaction);
  
  // get data for user per current week
  const weekSum = weekHashData
    .filter((hashItem) => hashItem.hash === getHash(transaction))
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue.amount,
      0,
    );
  // if MAX per week exceeded 
  if (weekSum > 1000) {
    let exceededAmount = 0;
    // calculate current exceeded amount
    if ((weekSum - transaction.operation.amount) > 1000) {
      exceededAmount = transaction.operation.amount;
    } else {
      exceededAmount = transaction.operation.amount - 1000;
    }
    // calculate fee
    const fullFee = exceededAmount * 0.003;
    return rounding(fullFee);
  }
  return rounding(0);
}

function cashOut(transaction) {
  switch (transaction.user_type) {
    case 'juridical':
      return cashOutJuridical(transaction);
    case 'natural':
      return cashOutNatural(transaction);
    default:
      return null;
  }
}
module.exports = cashOut;
