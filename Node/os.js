const os  = require('os')

//os info
console.log("os platform = ",os.platform()) //win 32
console.log("Type = ",os.type()) //windows_Nt
console.log("realese = ",os.release()) //10.0.190
//cpu info
console.log("cpus = ",os.cpus().length)// it will give all the information about the Cpu cores
console.log("architect of cpu = ",os.arch()) //like 54 or 32
//memory
console.log("total memeory = ",os.totalmem()/(1024*1024)+"  mb")//it will acualy get in bits 
console.log("free memory  = ",os.freemem()/(1024*1024)+"  mb")//same free momory
//network
console.log("network = ",os.networkInterfaces())//netrok info
//user
console.log("user = ",os.userInfo()) // user info like user name id and homedir
console.log("user home dir",os.homedir())
console.log("user home dir",os.endianness())


 