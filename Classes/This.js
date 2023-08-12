let x = this; 
// console.log(globalThis === globalThis.globalThis); // true (everywhere)
// //console.log(window === window.window); // true (in a browser)
// //console.log(self === self.self); // true (in a browser or a Web Worker)
// //console.log(frames === frames.frames); // true (in a browser)
// console.log(global === global.global); // true (in Node.js)
// console.log(globalThis.globalThis)
console.log(x) // refers to a global object

// "use strict";
let y = this;
console.log(y==x)//in use strict also global object

function myFunction() {
    return this;
  }
//console.log(myFunction()) // refers are global object
// "use strict";
// const person = {
//     // firstName  : "John",
//     // lastName   : "Doe",
//     // id         : 5566,
//     myFunction1 : function() {
//       return this;
//     }
//   };
// console.log(person.myFunction1())
// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const member = {
//     firstName:"Hege",
//     lastName: "hulo",
//   }
  
//   let fullName = person.fullName.bind(member);
  //console.log(fullName())
//   const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   const person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//   }
  
//   // This will return "John Doe":
//   console.log((person.fullName.call((person1))));

//   const person = {
//     fullName: function() {
//         console.log(typeof(person1))
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const person1 = {
//     firstName: "Mary",
//     lastName: "Doe"
//   }
  
//   // This will return "Mary Doe":
//   console.log(person.fullName.apply(person1));
const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
 console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));//we should pass the values in the array format otherwisw it will through error
  console.log(person.fullName.call(person1, "Oslo", "Norway"));//we should pass like different argument if we pass array it will take all the whole array and connect single element

  
  