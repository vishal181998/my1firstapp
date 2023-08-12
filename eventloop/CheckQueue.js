
//exp --> Check queue callbacks are excuted after microtask queues callbacks,the Timer queue callbacks and I/o queue are executed
// const fs = require('fs');
// fs.readFile("test.txt",()=>{
//     console.log("this is readFile 1");
//     setImmediate(()=>{console.log("this is setimidiate inside the readfile means I?O quese")})
// });
// process.nextTick(()=>console.log("this is process.nexttick 1"))
// Promise.resolve().then(()=>{
//     console.log("this is promise 1")
// })
// setTimeout(()=>{
//     console.log("this is set time out 1")
// },0)
// setImmediate(()=>{console.log("this is setimidiate 1")})
// for(let i=0 ;i<2000000000;i++){

// }


//exp---> microtask queues callbacks are executed after IO callbacks and before check queue callbacks
// const fs = require("fs");
// fs.readFile("test.txt", () => {
//   console.log("this is readFile 1");
//   setImmediate(() => {
//     console.log("this is setimidiate inside the readfile means I?O quese");
//   });
//   process.nextTick(() => console.log("this is process.nexttick inner part read file or IO queue"));
//   Promise.resolve().then(() => {
//     console.log("this is promise this iiner part of readfile Or queue");
//   });
// });
// process.nextTick(() => console.log("this is process.nexttick 1"));
// Promise.resolve().then(() => {
//   console.log("this is promise 1");
// });
// setTimeout(() => {
//   console.log("this is set time out 1");
// }, 0);
// setImmediate(() => {
//   console.log("this is setimidiate 1");
// });
// for (let i = 0; i < 2000000000; i++) {}


///exp ---> microtask queue callbacks are executed in between checkqueue callbacks
// setImmediate(() => {
//     console.log("this is setimidiate 1");
//   });
//   setImmediate(() => {
//     console.log("this is setimidiate 2");
//     process.nextTick(() => console.log("this is process.nexttick 1"));
//     Promise.resolve().then(() => {
//     console.log("this is promise 1");
//     });
//   });
//   setImmediate(() => {
//     console.log("this is setimidiate 3");
//   });

//exp---> whwn running setTimeout with dealy 0ms and setImmidiate method , the order of execution can never be guaranteed
setTimeout(() => {
    console.log("set time out 1")
}, 0);
setImmediate(()=>{
    console.log("set imidiate")
})
for (let index = 0; index < 1000000; index++) {
  
    
}