// Promise.any:
// The Promise.any method is somewhat similar to Promise.all, but it behaves differently when it comes to handling rejections. 
// Promise.any takes an iterable of promises as input and returns a new promise.
//  This new promise will be fulfilled as soon as any of the promises in the input iterable is fulfilled.
//   If all the promises in the input iterable are rejected, 
// the Promise.any promise will be rejected with an AggregateError containing an array of all rejection reasons.
//1--->promise any only excute when any one of  the promsie are resolved if all false through AggregateError: All promises were rejected
//2--->promise any will return fastest reolved vakuew 



// const p1=new Promise((resolve,reject)=>setImmediate(reject,"resolved  p1"))
// const p2=new Promise((resolve,reject)=>setImmediate(reject,"rejected p2"))
// const p3=new Promise((resolve,reject)=>setImmediate(resolve,"rejected p3"))

// Promise.any([p1,p2,p3]).then((message)=>console.log("resolved:",message)).catch((message)=>console.log("rejected:",message))
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p1 is resolved");
    }, 7000);
  });
  
  const p2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(30);
    }, 3000);
  });
  
  const p3 = new Promise((resolve,reject) => {
    setTimeout(() => {
     // console.log("rejected p3")
      reject(10);
    }, );
  });
  

  Promise.any([p1,p2,p3]).then((message)=>console.log(message)).catch((message)=>console.log(message))