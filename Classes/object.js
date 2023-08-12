//non premetive
//store multiple collections of data
const student ={
    name:"vishal", // key:value
    class:10
}

console.log(student.name)
console.log(student["name"])


//nested object
const student1 = { 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}
console.log(student1.marks)//we get object marks { science: 70, math: 75 }
console.log(student1.marks.science)// we will get scice marks as 70
///function in object
const student2 = { 
    name: 'John',
    lastname:"huli", 
    age: 20,
    marks: {
        science: 70,
        math: 75
    },
    fullname: function comb(){  // this is function in an object as value 
        return this.name+" "+this.lastname;
    }
}
console.log(Object.keys(student2))//returns all the keys of objecrt
console.log(Object.values(student2))//retuens all the values of that object
console.log(student2.fullname())

const news= {name:"rab",day:20}
console.log(Object.keys(news))