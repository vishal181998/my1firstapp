/**How to use map() in JavaScript
The map() function takes an array of values and applies a transformation to each value in the array.
It does not mutate the original array. It is often used to transform an array of data into a new array with a different structure.

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// // Arrow function
// map((element) => { /* … */
// map((element, index) => { /* … */ })
// map((element, index, array) => { /* … */ })
// // Callback function
// map(callbackFn)
// map(callbackFn, thisArg)
// // Inline callback function
// map(function (element) { /* … */ })
// map(function (element, index) { /* … */ })
// map(function (element, index, array) { /* … */ })
// map(function (element, index, array) { /* … */ }, thisArg)

let array = [1, 2, 3, 4, 5, 5, 6, 6, 7, 8];

let number = array.map((x) => x * 2);
console.log(number); /// return a new array  with squared value its return object

let sqnum = array.map((x) => Math.sqrt(x));
console.log(sqnum);

const arrk = [
  { key: 1, value: 3 },
  { key: 4, value: 3 },
  { key: 1, value: 6 },
  { key: 1, value: 3 },
]; /// its array of multipe object
let newk = arrk.map(({ key, value }) => {
  if (key > 1) return { key: value };
});
console.log(newk);
//let newk= arrk.map({k,v} =>  )

// Calling map() on non-array objects
// The map() method reads the length property of this and then accesses each property whose key is a nonnegative integer less than length.
console.log(
  Array.prototype.map.call(arrk, ({ key, value }) => {
    if (key > 0) return { key, value };
  }),
);

const users = [
  { firstName: "John", lastName: "Doe", age: 25 },
  { firstName: "Jane", lastName: "Doe", age: 30 },
  { firstName: "Jack", lastName: "Doe", age: 35 },
  { firstName: "Jill", lastName: "Doe", age: 40 },
  { firstName: "Joe", lastName: "Doe", age: 45 },
];
// for(let i of users){
//     console.log(i.firstName)
// }
let fullname = users.map((obj) => obj.firstName + " " + obj.lastName);
console.log(fullname);
