const fs = require('node:fs');
const zlib = require('zlib');
// explaining abojut stream
const { getDefaultHighWaterMark } = require('node:stream');


//zlib using 

const gzip = zlib.createGzip();

const readablestream = fs.createReadStream("./text.txt",{
    encoding:'utf-8',
    highWaterMark:2, //specify how many bites
})

 // aplly transoform using zlib
readablestream.pipe(gzip).pipe(fs.WriteStream('./text2gz.txt.gz'))


const writablestream  = fs.createWriteStream("./text2.txt");
// by deAfukt size of chuck we 64kb using steam
// readablestream.on("data",(chunk)=>{
//     console.log(chunk);
//     writablestream.write(chunk);
// })

readablestream.pipe(writablestream)