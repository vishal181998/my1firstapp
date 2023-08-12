
// IO events are polled and callback function are added to the I/O queue only after the I/o is completed

const fs = require('fs');
fs.readFile("test.txt",()=>{
    console.log("this is readFile 1");
});
process.nextTick(()=>console.log("this is process.nexttick 1"))
Promise.resolve().then(()=>{
    console.log("this is promise 1")
})
setTimeout(()=>{
    console.log("this is set time out 1")
},0)
setImmediate(()=>{console.log("this is setimidiate 1")})
for(let i=0 ;i<2000000000;i++){

}