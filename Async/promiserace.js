// The Promise.race method is used to handle multiple promises and returns a new promise that fulfills or rejects as soon as 
// the first promise in the input iterable (usually an array) settles (fulfills or rejects).
//  It ignores all other promises once the first one settles.
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
  

  Promise.race([p1,p2,p3]).then((message)=>console.log(message)).catch((message)=>console.log(message))