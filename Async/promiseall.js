// Promise.all:
// The Promise.all method takes an iterable (usually an array) of promises as input and returns a new promise. 
// This new promise will be fulfilled when all the promises in the input iterable are fulfilled. 
// If any of the promises in the input iterable is rejected,

//  the Promise.all promise will be rejected with the reason of the first rejected promise.

//1--->promise all only excute when all the promsie are resolved if any false it will through error
//2--->promise all will execute in order they declared it promiseall function
//3-->if we meantion catch block if any case reject only catch bloc is excuted all resolved block will not show
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p1 is resolved");
    }, 1000);
  });
  
  const p2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(30);
    }, 3000);
  });
  
  const p3 = new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("rejected p3")
      reject(10);
    }, 2000);
  });
  
  Promise.all([p1,p2,p3]).then((message)=>console.log(message)).catch((message)=>console.log(message))