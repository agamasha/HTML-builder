let fs = require('fs');
const writeableStream = fs.createWriteStream('./02-write-file/text.txt');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Write something\n', input => {
  writeableStream.write(input + '\n');
});

readline.on('line', (input) => {
  writeableStream.write(input + '\n');
});

readline.on('line', (input) => {
  if (input === 'exit') {
    console.log('Goodbye!');
    process.exit(0);
  }
})

readline.on('close', function() {
  console.log('Goodbye!');
  process.exit(0);
});