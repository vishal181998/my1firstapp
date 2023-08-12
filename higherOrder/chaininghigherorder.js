// Higher-order functions can be chained together to perform complex operations in a more elegant way.
let number = [1,2,4,5,7]
const result = number.filter(num=>num%2==0).map(num=>num*num).reduce((acc,val)=>acc+val)
console.log(result)