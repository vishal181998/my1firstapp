// let student = {
//     name : "vishal",
//     id : 23,
//     id :24
// }
// console.log(student)
// // for(let i of student){
// //     console.log(i)
// // }
// student.forEach(element => {
//     console.log(element)
    
// });

// const person = {
//     name: 'Alice',
//     age: 30,
//     occupation: 'Engineer'
// };

// for (const key in person) {
//     console.log(`${key}: ${person[key]}`);
// }

// const person = {
//     name: 'Alice',
//     age: 30,
//     occupation: 'Engineer'
// };

// const keys = Object.keys(person);
// keys.forEach(key => {
//     console.log(`${key}: ${person[key]}`);
// });
// const person = {
//     name: 'Alice',
//     age: 30,
//     occupation: 'Engineer'
// };

// const values = Object.values(person);
// values.forEach(value => {
//     console.log(value);
// });
// const person = {
//     name: 'Alice',
//     age: 30,
//     occupation: 'Engineer'
// };

// const entries = Object.entries(person);
// entries.forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
// });
const person = {
    name: 'Alice',
    age: 30,
    occupation: 'Engineer'
};

for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}
for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
    }
}
const obj = {
    [Symbol('key')]: 'value',
    [Symbol('@')   ]: 'x'
};
const symbols = Object.getOwnPropertySymbols(obj);
symbols.forEach(symbol => {
    console.log(symbol, obj[symbol]);
});





