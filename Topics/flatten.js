// Flattening an array means converting a multi-dimensional or nested array into a single-dimensional 
//array, where all the elements are at the same level.
// In other words, it's the process of removing nesting and creating a simpler structure.
const nestedArray = [[1, 2,[4,4], 3], [4, 5], [6, 7, 8]];
//using the 
const flateen = nestedArray.flat(); //flat remove only one squrae  bralet
console.log(flateen)

// // using for loop
// let x=[]
// for(let i of nestedArray)
// {
//     for(let j of i)
//     {
//         x.push(j)
//     }
// }
// console.log(x)
const test = [1,2,3,[4,5,[6,7]],[[[[NaN],undefined]]]]
const flatten = (input) => { 
    let result = []                        
    if(!Array.isArray(input)){
        console.log(input) //it will return value only if it is not 
        return input
    }
    for(let data of input)
    {
        console.log(data)
        result = result.concat(flatten(data)) // using recusion 
    }
    return result
}
console.log(flatten(test))


// //ooutput= [ 1, 2, 3, 4, 5, 6, 7, NaN, undefined ]

// let x=[1,2,[3,[4,5,[6,[7]]]]]
// let y=flatten([3,[4,5,[6,[7]]]])
// console.log(y)
// function newflat(x){
//     let res=[]
//     for(let data of x)
//     {
//         console.log("data",data)
//         res = flatten(data)
//         console.log("result",res)
//     }
//     return res
// }
// console.log(newflat(x))