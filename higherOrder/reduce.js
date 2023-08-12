// In the case of the reduce() method,
//  you should is used it when you want to perform some operation on the elements of an array and return a single value as a result. 
//  The "single value" refers to the accumulated result of repeatedly applying a function to the elements of a sequence.

// let arr=[1,2,3,4,5,5,66,6,6,6]

// let sum=arr.reduce((total,curr) =>(
//       total=total+curr
// ))
// console.log(sum)
// // The total argument is the accumulation of the values that have been returned from the function so far,
// //  and the currentValue is the current element being processed in the array.

// let max =  arr.reduce((maxnum,curr) => {
//     if(maxnum<curr)
//     {
//         maxnum=curr
//     }
//     return maxnum
// })
// console.log(max)

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const obj3 = { e: 5, f: 6 };
// const mergedObj = [obj1, obj2, obj3].reduce((acc, curr) => {
//     return { ...acc, ...curr };
// }, {});
// console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }'


const shoppingCart = [
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Xiomi', price: 2.99, quantity: 2},
    {name: 'Samsung', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 4.99, quantity: 4},
    {name: 'Nokia', price: 4.99, quantity: 4},
]

const products = shoppingCart.reduce((productGroup, product) => {
    const name = product.name;
    if(productGroup[name] == null) {
        productGroup[name] = [];
    }
    productGroup[name].push(product);

    return productGroup;
}, {});
// In the given code, the purpose of using curly braces ({}) is to create an empty object literal ({}) 
// that serves as the initial value of the productGroup accumulator in the reduce function.
console.log(products);