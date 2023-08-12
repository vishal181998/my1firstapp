// to understand how timer works in even loop 
//experiment 4--> callbacks in the micro task queue are executed before callbacks in the timer queue
setTimeout(()=>{console.log("this is setTimeout 1"),0})
//experiment 5-->callbacks in microtask queues are executed in between the execution of callbacks in the timer queue
setTimeout(()=>{console.log("this is setTimeout 2")
console.log("this is process.nextTick 2");
process.nextTick(()=>{
    console.log("this is inner next tick inside the settimeout")
}),0})
//experimentr 5--> timers queue callbacks are executed in FIFO order
setTimeout(()=>{console.log("this is setTimeout 3"),0})
setTimeout(()=>console.log("this is setTimeout 4"),1000)
setTimeout(()=>console.log("this is setTimeout 5"),0)
setTimeout(()=>{console.log("this is setTimeout 6"),100})
// bellow code same as microtask Queue which will execute 1st before the timerQueue
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