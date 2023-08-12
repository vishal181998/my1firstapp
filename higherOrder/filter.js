// How to Use filter() in JavaScript
// The filter() function takes an array and returns a new array with only the values that meet certain criteria.
//  It also does not mutate the original array.
// It is often used to select a subset of data from an array based on certain criteria.

let array = [1, 2, 4, 4, 6, 77, 8, 5];
let oddnum = array.filter((x) => x % 2 == 0); // returs the value
//let mapnum = array.map(x => x%2==0) // returns true of false
console.log(array);
console.log(oddnum);


const users = [
    {firstName: 'John', lastName: 'Doe', age: 25},
    {firstName: 'Jane', lastName: 'Doe', age: 30},
    {firstName: 'Jack', lastName: 'Doe', age: 35},
    {firstName: 'Jill', lastName: 'Doe', age: 40},
    {firstName: 'Joe', lastName: 'Doe', age: 45},
]

let agemore = users.filter((obj) => obj.age>30) // 
let agemor2 = users.filter(({age}) => age<30)
console.log(agemore , agemor2)