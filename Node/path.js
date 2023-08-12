// The node:path module provides utilities for working with file and directory paths. It can be accessed using:
const path = require('node:path');
let x = path.basename('C:\\temp\\myfile.html');
console.log(x) //myfile.html

let y = path.basename('/foo/bar/baz/asdf/quux.html', '.html'); 
console.log(y) //quux

//console.log(process.env.PATH); //all paths i c
console.log(process.env.PATH.split(path.delimiter)); // all path in array format
console.log(path.parse('/home/user/dir/file.txt'))

console.log(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'))
console.log('foo\\bar\\baz'.split(path.sep))