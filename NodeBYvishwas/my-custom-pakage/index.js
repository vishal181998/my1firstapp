const uppercase = require('upper-case').upperCase;
function greeet(name){
    console.log(uppercase(`hello ${name},welcome to codeevolution`))
}
greeet("vishal")
module.exports = greeet;