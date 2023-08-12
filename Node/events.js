//built in importing module
const event = require("events") 
//creating event emitter by instantiation
const myevent = new event();
//attaching event listner 
//there are two ways use on or addListner
myevent.on("new_event",()=>  // this is an empty event without any data coming from emit
{
    console.log("my 1st event")
})
myevent.addListener("add_even",()=>{
    console.log("usin add listner funtion")
})
myevent.on("text-ev",(data)=>{
    console.log("event listner with data= ",data)
})
//emiting an event like running an event
myevent.emit("new_event")
myevent.emit("add_even")
myevent.emit("text-ev","dead") // here we are passing the value as dead 
//creating a event only runs once  usine event once
myevent.once("once-event",()=>{
    console.log("i am once event i never emit again")
})
myevent.emit("once-event")//one time it will execute
myevent.emit("once-event")// this wont give any output

// removing event listner
myevent.on("list0",()=>{})
myevent.on("list1",()=> // this is an empty event without any data coming from emit
{
    console.log("i am list1")
})
myevent.addListener("list2",()=>{
    console.log("list2 event")
})
myevent.addListener("list2",()=>{
    console.log("list2 event")
})
myevent.on("list3",(data)=>{
    console.log("list3 ",data)
})
myevent.on("list4",(data)=>{
    console.log("list3 ",data)
})
//if we want remove the list1 and list3
myevent.emit("list3") // if pass nothing i will print undefined
myevent.emit("list3","data")//now it will print data
myevent.removeListener("list0",()=>{}) // we should have function or else it will through error
myevent.removeListener("list1",()=>{}) 
myevent.removeListener("list3",()=>{})
// myevent.removeAllListeners("list2") // it will remove all the event with that name
// myevent.emit("list2")

//count listner
const countlist = myevent.listenerCount("list2");
console.log(countlist)// give the perticular number of events are with that name

//listing the name of events

const evenames = myevent.eventNames();
console.log(evenames) // it will give all event names whith myevent

//checking maximum event lsitners

const max = myevent.getMaxListeners(); //by default it will 10
console.log(max)

//lets change the max listner value to 15
myevent.setMaxListeners(20)
const max1 = myevent.getMaxListeners(); // now maximum listner will 20
console.log(max1)