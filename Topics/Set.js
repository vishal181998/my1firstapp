//Set class is a built-in data structure that allows you to store unique values of any type. Unlike arrays,
// sets do not allow duplicate values, and they provide efficient methods for adding, removing, and checking for the existence of elements.
// The Set class is part of the ECMAScript 6 (ES6) specification and is available in modern browsers and Node.js environments.
const mySet = new Set();
//adding elemnt to set
mySet.add(1);
mySet.add(3);
mySet.add(5);
mySet.add(5);//will be ignored (dublicate)
// let newr=Array.from(mySet)
// console.log(newr)
console.log(mySet)
//Checking Existence: The has() method allows you to check whether a specific value exists in the set.
console.log(mySet.has(2))//false
console.log(mySet.has(5)) //return true
//Removing Elements:You can use the delete() method to remove a specific value from the set.
mySet.delete(5);
console.log(mySet)

//Iterating Through Values: Sets can be easily iterated using loops or methods like forEach().
mySet.forEach(value => {
    console.log(value);
  });
  
//Checking Size:
const characters = new Set('programming');

console.log(characters.size); // 10

//Clearing a Set:
const mySet2 = new Set([1, 2, 3]);

mySet2.clear();

console.log(mySet2); // Set {}




