//1--->this example shows all user written Synchronus javascript code takes proprity over async code the
//the runtime would like to eventually execute
// console.log("console log 1")
// process.nextTick(()=>{
//     console.log("this is process.next 1")
// })
// console.log("console  log 2")


//experiment 2 --> all the callbacks in nextTick queue are executed before callbacks in promise queue
// Promise.resolve().then(()=>{
//     console.log("this is promise.resolve 1")

// })
// process.nextTick(()=>{
//     console.log("this is process.next tick  1");
// })

//experiment 3 --> understanding how both work inside one another

process.nextTick(()=>{console.log("this is process.nextTick 1")});

process.nextTick(()=>{
    console.log("this is process.nextTick 2");
    process.nextTick(()=>{
        console.log("this is inner next tick inside the nextstic 1st")
    })
})
process.nextTick(()=>{
    console.log("this is process.nextTick3")
})
Promise.resolve().then(()=>{console.log("this is promise.resolve 1")})
Promise.resolve().then(()=>{
    console.log("this promise.resolve 2");
    process.nextTick(()=>{
        console.log("this is inner next tic inside promise then block 2")
    })
})
Promise.resolve().then(()=>{console.log("this is promise.resolve 3")})
