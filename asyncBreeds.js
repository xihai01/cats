// asyncBreeds.js
const fs = require('fs');

const callback = function(data) {
  console.log(data);
};

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  const stuff = fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's callback: it has data.");
    if (!error) callback(data);
  });
  console.log(stuff);
};

const bombay = breedDetailsFromFile('Bombay', callback);
console.log('Return value: ', bombay);