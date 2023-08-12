// The Promise.allSettled method is used to handle multiple promises similar to Promise.all,
//  but with a slightly different behavior. It takes an iterable (usually an array) of promises as input and returns a new promise. 
//  This new promise will be fulfilled when all the input promises have settled,
//   either resolved or rejected. The result of the Promise.allSettled promise is an array 
//   of objects representing the outcome of each promise, whether it was fulfilled with a value or rejected with a reason.

// Each object in the resulting array has the following structure:

// { status: "fulfilled", value: <fulfilled value> } if the promise is fulfilled.
// { status: "rejected", reason: <rejection reason> } if the promise is rejected.


const p1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, "Resolved p1"));
const p2 = new Promise((resolve, reject) => setTimeout(reject, 1500, "Rejected p2"));
const p3 = new Promise((resolve, reject) => setTimeout(resolve, 500, "Resolved p3"));

Promise.allSettled([p1, p2, p3])
  .then((results) => {
    console.log("Results of Promise.allSettled:", results);
  })
  .catch((error) => {
    console.error("Error in Promise.allSettled:", error);
  });
