const rounding = require('./rounding');

function cashOutJuridical(transaction) {
  const fullFee = transaction.operation.amount * 0.3 / 100;
  return rounding((fullFee > 0.5) ? fullFee : 0.50);
}

function cashOutNatural(transaction) {
  const fullFee = transaction.operation.amount * 0.3 / 100;
  return rounding((fullFee > 0.5) ? fullFee : 0.50);
}

function cashOut(transaction) {
  switch(transaction.user_type) {
    case 'juridical':
      return cashOutJuridical(transaction);
    case 'natural':
      return cashOutNatural(transaction);
    default:
      return null;
  }
}
module.exports = cashOut;