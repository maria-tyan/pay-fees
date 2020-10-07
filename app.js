const jsonData = require('./dataGetters/readData');
const fetchData = require('./dataGetters/fetchData');
const cashIn = require('./calculations/cashIn');
const cashOut = require('./calculations/cashOut');

const fileName = 'input.json';
const data = jsonData(`./${fileName}`);

const result = data
  .map(async (transaction) => {
    switch (transaction.type) {
      case 'cash_in':
        return await cashIn(transaction);
      case 'cash_out':
        return await cashOut(transaction);
      default:
        return null;
    }
  });

Promise.all(result).then((result) => {
  console.log(...result);
})

// console.log(fetchData('http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/natural'));
