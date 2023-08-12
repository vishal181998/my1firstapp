//Priavte static method
//priavte members are cant be accessed in outside the class dierectly or in child class
//but we can get the private data by
//1>creating non static method and retruning the object by this.#mthod or variable
//2>static private variable can be accesed static method callening it by Classname rather than creating object
//3>we can use getter and setterss even constructor but we cant create priavte constructer
//----------example for all of the above lines------
// class Counter {
//   // this is a private property
//   #value;
//   constructor(value){
//     this.#value=value;
//   }
//   getvalue(){
//     return this.#value
//   }
//   get values(){
//     return this.#value;
//   }
//   set values(m){
//     this.#value = m
//   }

//   static #new=10;
//   #count = 4;
//   static #statmethod(){
//     console.log("i am static method")
//     return "hell"
//   }
//   static getstamethods(){
//     return Counter.#statmethod();
//   }
//   #nonstat(){
//     return "i am non static method"
//   }
//   getnontstat (){
//     return this.#nonstat();
//   }
//   // increment() {
//   //   // only methods of this class can access this member
//   //   this.#count++;
//   // }

//   // we need a public method to get the value of the private member
//   static getstatic (){
//     return this.#new;
//   }
//   get coutget(){
//     return this.#count;
//   }
//   set setcount(x){
//     this.#count=x;
//   }
//   getstatics (){
//     return this.#new;
//   }
//   getCount() {
//     return this.#count; 
//   }
// }

// let counter = new Counter(20);
// // counter.increment();
// // counter.increment();
// // console.log(counter.getCount());
// // // output: 2
// // console.log(Counter.getstatic())
// // console.log(Counter.getstamethods())
// // console.log(counter.getnontstat())
// // counter.setcount=22
// // console.log(counter.getCount());
// console.log(counter.getvalue())
// counter.values=30
// console.log(counter.values)

//-----------------------now lets try it by child--------
class student {
  #name;
  #age;
  constructor(name,age){
    this.#name = name
    this.#age =  age
  }
  get getnname(){
    return this.#name
  }
  set getnname(x){
    this.#name=x
  }
  get getage(){
    return this.#age;
  }
  set setage(c){
   this.#age=c
  }
  #user(){
    console.log("user dead")
  }
  deaduser(){
    return this.#user()
  }
}
class child extends student{
  #id;
  constructor(name,age,id)
  {
    super(name,age);
    this.#id=id
  }
  get getid(){
    return this.#id
  }
  set getid(n){
    this.#id=n

  }
}

const ch = new child("hello",23,44)
console.log(ch.getnname,ch.getage,ch.getid)
ch.getid=66;
console.log(ch.getnname,ch.getage,ch.getid)
ch.deaduser()

