// A shallow copy is a duplication of an object or data structure in which the copy contains references 
//to the same elements as the original, rather than creating new instances of the elements themselves. 
//In other words, the new copy points to the same memory locations as the original for its immediate elements, but not for nested elements. 
//This can lead to unexpected behavior if you modify nested elements in the copy, as the changes might also affect the original object.

const originalAr= [1, 2, [3, 4]];
const shallowcopy = [...originalAr]
shallowcopy[0]=77; //it will copy with new refrence 
shallowcopy[2][0] = 99; //but inner array will have same refenece
console.log(originalAr)//origin array
console.log(shallowcopy) // copied array 