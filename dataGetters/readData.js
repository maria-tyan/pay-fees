const fs = require('fs')

const jsonData = (path) => {
  try {
    return JSON.parse(fs.readFileSync(path));
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = jsonData;