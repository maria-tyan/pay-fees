const fetch = require('node-fetch');

async function fetchData(fetchUrl) {
  // fetch request with error handling
  return fetch(fetchUrl)
    .then(res => res.json())
    .catch((error) => {
      console.log('Something went wrong: ', error);
    });
}

module.exports = fetchData;
