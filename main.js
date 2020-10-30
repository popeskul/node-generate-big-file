const os = require('os');
const fs = require('fs');

const SYBMBOL = 'p';
const LENGTH = 10_000_000;
const FREE_MEMORY = os.freemem();

console.time();

try {
  if (typeof LENGTH !== 'number') throw 'Must be a number';
  if (LENGTH < 0) throw 'The number must be greater than 0';
  if (LENGTH > FREE_MEMORY)
    throw `The number must be lower than ${FREE_MEMORY}`;

  const fileString = `${SYBMBOL}\n`.repeat(LENGTH);
  const fileSize = Buffer.byteLength(fileString, 'utf8');

  if (fileSize > FREE_MEMORY) throw 'to big file';

  fs.writeFileSync('text.txt', fileString);
} catch (error) {
  console.log('Error: ', error);
}

console.timeEnd();
