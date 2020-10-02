const fs = require('fs')

const jsonData = (fileName) => {
  try {
    return JSON.parse(fs.readFileSync(`./${fileName}.json`));
  } catch (err) {
    console.log(err.message);
  }
};

console.log(jsonData('input'))