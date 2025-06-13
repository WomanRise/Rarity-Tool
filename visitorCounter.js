const fs = require('fs');
const path = require('path');

const counterFilePath = path.join(__dirname, 'counter.txt');

// Initialize the counter file if it doesn't exist
if (!fs.existsSync(counterFilePath)) {
  fs.writeFileSync(counterFilePath, '0', 'utf8');
}

function incrementVisitorCount() {
  let count = parseInt(fs.readFileSync(counterFilePath, 'utf8'), 10);
  count += 1;
  fs.writeFileSync(counterFilePath, count.toString(), 'utf8');
  return count;
}

module.exports = incrementVisitorCount;
