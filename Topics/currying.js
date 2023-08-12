// Currying in JavaScript is a functional programming technique where a function 
// that takes multiple arguments is transformed into a sequence of functions, 
// each taking a single argument. The curried function returns a new function 
// for each argument until it receives all the required arguments and finally returns the result.

function currryAdd(a){
    return function(b){
        return a+b;
    }
}
const x=currryAdd(3)(4)

function add(a){
    return (b)=>{
        return (c)=>{
            return a+b+c
        }
    }
}
let y=add(6)
let z=y(8)
let v=z(7)
console.log(v)
console.log(add(1)(0)(8))
console.log(x)