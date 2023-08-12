// The Map object holds key-value pairs and remembers the original insertion order of the keys. 
// Any value (both objects and primitive values) may be used as either a key or a value.
// new Map()	Creates a new Map object
// set()	Sets the value for a key in a Map
// get()	Gets the value for a key in a Map
// clear()	Removes all the elements from a Map
// delete()	Removes a Map element specified by a key
// has()	Returns true if a key exists in a Map
// forEach()	Invokes a callback for each key/value pair in a Map
// entries()	Returns an iterator object with the [key, value] pairs in a Map
// keys()	Returns an iterator object with the keys in a Map
// values()	Returns an iterator object of the values in a Map
const fruits = new Map([  //here we are passing a array to map function
    ["apples",500],  
    ["bananas", 300],
    ["oranges", 200]
  ]);
//  console.log(fruits)

const student = new Map();
student.set("sam",1)
student.set("vishal",2)
student.set("ravi",3)
student.set("ram",6,8)
student.set("ram",50)
let x=student.get("sam")
// console.log(x)
// console.log(student)
// console.log(student.size)
// student.delete("vishal")
// console.log(student)
// console.log(student.has("ram"))
// student.clear()
// console.log(typeof(student));
// console.log(fruits instanceof Map)
// let text=""
// student.forEach(function(value,element){
//     console.log(value,element)
// });
// let text = "";
// fruits.forEach (function(value, key) {
//   text += " "+key + ' = ' + value;
// })
// let text = "";
// for (const x of fruits.entries()) {
//   text += x;
// }
// console.log(text)
// console.log(student.value)
// console.log(student.key)
for(let [value,key] of student){
    console.log(value,key)
}
student.forEach((value,key) => {
    console.log(value,key)
    
});
console.log(fruits.keys())
console.log(fruits.values())



