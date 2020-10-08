const jsonData = require('./dataGetters/readData');
const fetchData = require('./dataGetters/fetchData');
const getFee = require('./calculations/getFee');

let fileName = process.argv.slice(2)[0];
if (!fileName) {
  fileName = 'input.json';
}
const hostName = 'http://private-38e18c-uzduotis.apiary-mock.com';

const data = jsonData(`./${fileName}`);

(async () => {
  for (let i = 0; i < data.length; i++) {
    const transaction = data[i];

    // API URLs dictionary
    const urlAPIs = {
      'cash_in': `${hostName}/config/cash-in`,
      'cash_out': `${hostName}/config/cash-out/${transaction.user_type}`,
    }

    // fetch data from API and calculate fee
    const resultI = await fetchData(urlAPIs[transaction.type])
      .then((feeConfiguration) => {
        return getFee(transaction, feeConfiguration);
      });

    console.log(resultI);
  }
})();
