const getFee = require('./getFee');
const fetchData = require('../dataGetters/fetchData');

async function cashIn(transaction) {
  // fetch data for current transaction
  return fetchData(`http://private-38e18c-uzduotis.apiary-mock.com/config/cash-in`)
    .then((feeConfiguration) => {
      return getFee(transaction, feeConfiguration);
    });
}
module.exports = cashIn;

