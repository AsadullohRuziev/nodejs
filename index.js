// Node.js File System Module

var fs = require('fs')



//rename a file named mynewfile1.txt:
fs.rename('mynewfile.txt', 'rename.txt', function (err) {
    if (err) throw err;
    console.log('Rename!');
  });