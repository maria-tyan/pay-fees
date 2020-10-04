const rounding = require('./rounding');
const { getISOWeek, getYear } = require('date-fns');

function calculateWeekHash(data) {
  return data.map(transaction => {
    const date = new Date(transaction.date)
    return {
      isoWeek: getISOWeek(date),
      year: getYear(date),
      userId: transaction.user_id,
    }
  })
}

function cashOutJuridical(transaction) {
  const fullFee = transaction.operation.amount * 0.3 / 100;
  return rounding((fullFee > 0.5) ? fullFee : 0.50);
}

function cashOutNatural(transaction) {
  const fullFee = transaction.operation.amount * 0.3 / 100;
  return rounding((fullFee > 0.5) ? fullFee : 0.50);
}

function cashOut(transaction, data) {
  console.log(calculateWeekHash(data))
  switch(transaction.user_type) {
    case 'juridical':
      return cashOutJuridical(transaction);
    case 'natural':
      return cashOutNatural(transaction, data);
    default:
      return null;
  }
}
module.exports = cashOut;