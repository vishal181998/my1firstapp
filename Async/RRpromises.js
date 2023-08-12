
// Promises are a fundamental concept in JavaScript used for handling asynchronous operations.
// They provide a clean and structured way to work with asynchronous code and avoid the pitfalls of callback hell.
//  Promises represent a value that may not be available yet but will be resolved or rejected at some point in the future. 
//  They have three possible states:

// Pending: The initial state. The promise is neither resolved nor rejected.

// Fulfilled/Resolved: The state when the promise is successfully resolved with a value.

// Rejected: The state when the promise is unable to fulfill and an error or reason for rejection is provided.
let count=10;
let postive = new Promise(function(resolve,reject){
    if(count>0){
        resolve("it is positive")  // if its true execute
    }else{
        reject("its not positive")// resolve through execption so we shound catcg it
    }
})
.then((data)=>{
    console.log("given data is:",data)
})
.catch((error)=>{
    console.log("erro:",error)
})
postive
