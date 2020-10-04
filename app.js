const jsonData = require('./dataGetters/readData');
const cashIn = require('./calculations/cashIn');
const cashOut = require('./calculations/cashOut');

const fileName = 'input.json';
const data = jsonData(`./${fileName}`);
console.log(data);

const result = data
  .map(transaction => {
    switch(transaction.type) {
      case 'cash_in':
        return cashIn(transaction);
      case 'cash_out':
        return cashOut(transaction, data);
      default:
        return null;
    }
  });

console.log(...result);

