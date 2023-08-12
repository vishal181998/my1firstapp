// The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.
class Firstnames{
    constructor(name,gender,age) {
        this.name=name;
        this.gender = gender;
        this.age = age;
    }
    getseparate(){
        return '-';
    }
    static statmethod(){
        return 'i am static method form super class';
    }
}
class Fullname extends Firstnames{
    constructor(name,sirname,gender,age) {
        super(name,age,gender);
       this.sirname = sirname;
    }
    fullname(){
        
        return this.name+super.getseparate()+this.sirname+super.getseparate()+this.age
    }
    static new(){
      return `"hii",${super.statmethod()}`

    }
   

}
//const fn=new Fullname("male","patil",29)

console.log(Fullname.statmethod()) /// here also we can access the static methods by createing obj so we should callit by child clkass name
console.log(Fullname.new())
