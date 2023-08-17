const fs = require('fs');
const crypto = require('crypto');
const start  = Date.now();
process.env.UV_THREADPOOL_SIZE=5;
// crypto.pbkdf2Sync("password","salt",10000,512,"sha512")
// crypto.pbkdf2Sync("password","salt",10000,512,"sha512")
// crypto.pbkdf2Sync("password","salt",10000,512,"sha512")
const mxcall= 5;
for(let i=0;i<mxcall;i++){
    crypto.pbkdf2("password","salt",10000,512,"sha512",()=>{
        console.log(`hash:${i+1}`,Date.now()-start)
    })

}
//console.log("hash : ",Date.now()-start)

// console.log("first")

// fs.readFile("./file.txt","utf-8",(err,data)=>{
//     console.log("file content")

// })

// console.log("last")