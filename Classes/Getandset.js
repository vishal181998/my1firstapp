// const student = {
//     name : "vishal",

//     get getname(){
//         return this.name
//     }
// }
// console.log(student.getname)//return vishal
//console.log(student.getname())// the this will theough error

class student1 {
  constructor(name, roll, marks) {
    this.name = name;
    this.roll = roll;
    this.marks = marks;
  }

  get getname() {
    //it will automaticaly called when . method is created
    return this.x;
  }
  set getname(x) {
    this.name = x;
  }
}
let ravi = new student1();
ravi.getname = { name: "ravi", roll: 22, marks: 34 };
// ravi.name= "vishal"
// ravi.roll=20
// ravi.marks=30
console.log(ravi);
