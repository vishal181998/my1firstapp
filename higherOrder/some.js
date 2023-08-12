// The some() function checks if at least one element in the array satisfies a given condition.
let x = [1,2,3,5,6]
const y=x.some(n=>n%2==0) // if any one condition is true it will return true
console.log(y) //true

 let s=[3,5]
 const z=s.some(n=>n%2==0) //here no nmber is even
 console.log(z) //false