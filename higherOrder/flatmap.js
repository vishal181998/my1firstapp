// The flatMap() function combines the map() and concat() functions. 
//It first maps each element using a mapping function and then flattens the result into a single array.
const sentences = ['Hello world', 'Node.js is fun', 'Higher-order functions'];
const words = sentences.flatMap(sentence => sentence.split(' '));
console.log(words); // Output: ['Hello', 'world', 'Node.js', 'is', 'fun', 'Higher-order', 'functions']
