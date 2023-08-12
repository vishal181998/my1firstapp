//exp --> close queue callbacks are executed after call other queues callbacks in a given iteration of the event loop

const fs = require('fs');
const readablestream  = fs.createReadStream("test.txt");
readablestream.close();
readablestream.on("close",()=>{
    console.log("this is form readable stream close event call backs")
})
setTimeout(() => {
    console.log("set time out 1")
}, 0);
setImmediate(()=>{
    console.log("set imidiate")
})
process.nextTick(()=>console.log("this is process.nexttick 1"))
Promise.resolve().then(()=>{
    console.log("this is promise 1")
})