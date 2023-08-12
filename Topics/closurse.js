// A closure is the combination of a function bundled together (enclosed) 
// with references to its surrounding state (the lexical environment). 
// In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, 
// closures are created every time a function is created, at function creation time.














// function createCounter() {
//     let count = 0; // This variable is private to the outer function but accessible to inner functions
  
//     function increment() {
//       count++;
//       console.log('Count:', count);
//     }
  
//     function decrement() {
//       count--;
//       console.log('Count:', count);
//     }
  
//     return {
//       increment, // Expose the increment function to the outside world
//       decrement // Expose the decrement function to the outside world
//     };
//   }
  
//   const counter = createCounter(); // Create an instance of the counter
  
//   counter.increment(); // Output: Count: 1
//   counter.increment(); // Output: Count: 2
  
//   counter.decrement(); // Output: Count: 1
//   counter.decrement(); // Output: Count: 0
// function makeAdder(x) {
//     return function (y) {
//       return x + y;
//     };
//   }
  
//   const add5 = makeAdder(5);
//   const add10 = makeAdder(10);
  
//   console.log(add5(2)); // 7
//   console.log(add10(2)); // 12

function nem()
{
    let c=0
    function v(){
    }
    return 
  
}