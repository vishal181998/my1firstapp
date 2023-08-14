// async function greet(){ console.log("hello")}
// greet()


// async function greeet(){
//     return  "hello"
// }
// let x= greeet()
// console.log(x)

async function gret(){
    let promise = new Promise((resolve,rejects)=>{
        setTimeout(()=>{
            resolve("hello")
        },5000)
    })
    let res = await promise;
    console.log(res)
}
gret()