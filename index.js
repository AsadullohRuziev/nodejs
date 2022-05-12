// Node.js File System Module

var fs = require('fs')



//create a file named mynewfile1.txt:
fs.unlink('mywriteFilefile.txt', function (err) {
    if (err) throw err;
    console.log('deleted!');
  });