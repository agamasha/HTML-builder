let fs = require('fs');
let stream = new fs.ReadStream('./01-read-file/text.txt');
stream.on('data', function(chunk){
  console.log(chunk.toString());
});