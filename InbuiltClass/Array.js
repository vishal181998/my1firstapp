// Here are some commonly used methods available on the Array class in JavaScript:

//1-->Array.from(iterable, mapFunction, thisValue)Creates a new array from an iterable (like an array-like object or a string), optionally applying a mapping function to each element.
const araylike = {0:'a',1:'b',length:2} //length should be mention
const newArray = Array.from(araylike); 
console.log(newArray) //[ 'a', 'b' ]

//2=-->Array.of(element1, element2, ...elementN) new array with the provided elements as its elements.
const newArra = Array.of(1, 2, 3, 4, 5);
console.log(newArra); // [1, 2, 3, 4, 5]

//3-->Array.isArray(value)Checks if the given value is an array.
const array = [1, 2, 3];
let s=(12,2,2)
console.log(Array.isArray(array)); // true
console.log(Array.isArray(s))//false

//3-->arrayInstance.concat(array2, array3, ..., arrayN) Combines the elements of the current array with the elements of other arrays and returns a new array.
let arr1=[1,2,3,4]
let arr2 = [2,3,4,5]
const combiedA = arr1.concat(arr2)
console.log(combiedA)

let x=[12,2,[22,[22],22,],22]
let y=[].concat(...x)
console.log(Array.isArray(y))

console.log(y)

