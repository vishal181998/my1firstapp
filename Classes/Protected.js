// Protected: This keyword allows a little more access than private members but a lot less than the public. 
//A protected member is accessible within the class (similar to private) and any object that inherits from it.
// A protected value is shared across all layers of the prototype chain.
// actually we can accesss data anywhere we make under score only to tell developer its protectd dont change value
//we can achive it by many ways

// let obj=(function(){
//     let _prop = 12222;
//     return{
//         prot2:120,
//         get prop1(){
//             return _prop
//         },
//         set prop1(x){
//             this._prop=x
//         }
//     }

// })();
// for(let props in obj){
//     console.log(props)
// }

class student{
    _name="hello";
    // constructor(name){
    //     this.name=this._name
    // }
    _user(){
         console.log("protected")
    }
}

const st= new student();
console.log(st._name)
st._user()