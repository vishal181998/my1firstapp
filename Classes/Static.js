class student{
    static name="vishal"
    static sirnme="nagali"
    static fullname(){
        return `${this.name},.,.${this.sirnme}`
    }
    static {
        console.log(" ia am static")
    }

}
let obj=new student()
console.log(obj.name)//we can not accesss static variable using object
//console.log(student.name,student.sirnme,student.fullname())
class ClassWithStaticField {
    static staticField;
    static staticFieldWithInitializer = "static field";
  }
  
  class SubclassWithStaticField extends ClassWithStaticField {
    static subStaticField = "subclass field";
  }
  
  console.log(Object.hasOwn(ClassWithStaticField, "staticField")); // true
  console.log(ClassWithStaticField.staticField); // undefined
  console.log(ClassWithStaticField.staticFieldWithInitializer); // "static field"
  console.log(SubclassWithStaticField.staticFieldWithInitializer); // "static field"
  console.log(SubclassWithStaticField.subStaticField); // "subclass field"