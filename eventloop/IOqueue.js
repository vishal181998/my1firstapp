//exp1 --> callbacks in the microtask queues are executed before callbacks in the I/o queue

const fs = require("fs");

// fs.readFile("test.txt",()=>{
//     console.log("this is readFile 1");
// });

// process.nextTick(()=>console.log("this is process.nextTick 1"))

// Promise.resolve().then(()=>{
//     console.log("this is promise.resolve 1")
// })

//exp--> depending upon and dealy it behaves diffrent

// setTimeout(() => { console.log("this is setimeout 1")  
// }, 0);
// fs.readFile("test.txt",()=>{
//     console.log("this is readFile 1");
// });

//exp---> I/o queue callbacks are executed after microtask queue callbacks and timer queue call backs


fs.readFile("test.txt",()=>{
    console.log("this is readFile 1");
});
process.nextTick(()=>console.log("this is process.nexttick 1"))
Promise.resolve().then(()=>{
    console.log("this is promise 1")
})
setTimeout(()=>{
    console.log("this is set time out")
},10)

for(let i=0 ;i<200000;i++){

}