const fs = require('fs');

const jsonData = (path) => {
  // read data from json with error handling
  try {
    return JSON.parse(fs.readFileSync(path));
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = jsonData;
