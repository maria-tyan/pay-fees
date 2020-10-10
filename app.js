const processing = require('./processing');
const readData = require('./dataGetters/readData');

let fileName = process.argv.slice(2)[0];
if (!fileName) {
  fileName = 'input.json';
}

const data = readData(`./${fileName}`);

processing(data);
