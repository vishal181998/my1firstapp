// import { access, open, close } from 'node:fs';
const fs = require('fs')

// fs.access('file.txt', (err) => {
//   if (!err) {
//     console.error('myfile already exists');
//     return;
//   }

//   open('file.txt', 'wx', (err, fd) => {
//     if (err) throw err;

//     try {
//       writeMyData(fd);
//     } finally {
//       close(fd, (err) => {
//         if (err) throw err;
//       });
//     }
//   });
// });

// fs.appendFile('file.txt', 'data to append', (err) => {
//     if (err) throw err;
//     console.log('The "data to append" was appended to file!');
//   }); 


// fs.open('myfile.js', 'r', (err, fd) => {
//   if (err) {
//     if (err.code === 'ENOENT') {
//       console.error('myfile does not exist');
//       return;
//     }

//     throw err;
//   }

//   try {
//     console.log(fd)
//   } finally {
//    fs.close(fd, (err) => {
//       if (err) throw err;
//     });
//   }
// });

// //reading file in async 
// fs.readFile('file.txt',{encoding:'utf-8',flag:'r'}, (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// //fs.writeFile(file, data[, options], callback)
// fs.writeFile('message.txt', "i am new user", (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   }); 
// //   fs.watchFile('message.txt', (curr, prev) => {
// //     console.log(`the current mtime is: ${curr.mtime}`);
// //     fs.writeFile('message.txt', "i am new user", (err) => {
// //         if (err) throw err;
// //         console.log('The file has been saved!');
// //       }); 
// //     console.log(`the previous mtime was: ${prev.mtime}`);
// //   }); 

// //copy file 
// function callback(err) { //old data wil be there
//     if (err) throw err;
//     console.log('source.txt was copied to destination.txt');
//   }
  
//   // destination.txt will be created or overwritten by default.
//   fs.copyFile('file.txt', 'message.txt', callback);
  
//   // By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
// //   copyFile('source.txt', 'destination.txt', constants.COPYFILE_EXCL, callback); 

// //fs.stat(path[, options], callback
// // const pathsToCheck = './files';

// // for (let i = 0; i < pathsToCheck.length; i++) {
// //   fs.stat(pathsToCheck[i], (err, stats) => {
   
// //     console.log(stats);
// //   });
// // } 
// //fs.unlink(path, callback)  Asynchronously removes a file or symbolic link. No arguments other than a possible exception are given to the completion callback.
// fs.unlink('file.text', (err) => {
//     if (err) throw err;
//     console.log('path/file.txt was deleted');
//   }); 
  //fs.mkdir(path[, options], callback)

  fs.mkdir('./Node/files/apple', { recursive: true }, (err) => {
    if (err) throw err;
    console.log("dir created")
  }); 
  //fs.rmdir(path[, options], callback)
  
  fs.rmdir('./Node', { recursive: true }, (err) => {
    if (err) throw err;
    console.log("dir deleteed")
  }); 