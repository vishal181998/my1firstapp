// These are not exactly array methods, but they can be considered 
//higher-order functions. They work with objects and return arrays of keys, values, and key-value pairs respectively.
const person = { name: 'Alice', age: 25, city: 'New York' };
const keys = Object.keys(person);
const value = Object.values(person);
const enteries =  Object.entries(person);

console.log(keys);
console.log(value);
console.log(enteries)