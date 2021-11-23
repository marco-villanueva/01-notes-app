const sum = require('./utils.js')
const fs = require('fs');

fs.writeFileSync('index.txt', `Sum 3 + 5 = ${sum(3, 5)}`);