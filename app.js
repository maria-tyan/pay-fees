const jsonData = require('./dataGetters/readData');
const cashIn = require('./calculations/cashIn');
const cashOut = require('./calculations/cashOut');

const fileName = 'input.json';
const data = jsonData(`./${fileName}`);

(async () => {
  
  let result = []
  for (let i = 0; i < data.length; i++) {
    let transaction = data[i]
    let resultI = null
    switch (transaction.type) {
      case 'cash_in':
        resultI = await cashIn(transaction);
        break;
      case 'cash_out':
        resultI = await cashOut(transaction);
        break;
      default:
        (null);
    }
    result.push(resultI)
  }

  console.log(...result);

})();