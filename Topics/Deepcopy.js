// Creating a deep copy of an array involves duplicating not only the 
// immediate elements of the array but also creating new instances for 
// nested arrays or objects within the array. 
// Here's how you can achieve a deep copy of an array in JavaScript:

//1-->Using JSON.parse() and JSON.stringify() (Limited Approach):
// You can also achieve a deep copy of an array using the JSON methods, but this method has limitations as it doesn't handle certain data types and functions:

const originalArray = [1,2, [2, 3],];
const deepCopiedArray = JSON.parse(JSON.stringify(originalArray));
deepCopiedArray[1]=8
deepCopiedArray[2][0]=99;
console.log(originalArray)
console.log(deepCopiedArray)