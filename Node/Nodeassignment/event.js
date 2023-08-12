const EventEmitter = require("events");
const myEmitter = new EventEmitter();
//adding events
myEmitter.once("event-A", (data) => console.log(data));
myEmitter.on("event-A", (data) => console.log(data));
myEmitter.on("event-B", (data) => console.log(data));
myEmitter.addListener("event-B", (data) => console.log(data));
myEmitter.addListener("event-C", (data) => console.log(data));
myEmitter.addListener("event-D", (data) => console.log(data));
myEmitter.on("event-D", (data) => console.log(data));
myEmitter.on("event-E", (data) => console.log(data));
myEmitter.once("event-F", (data) => console.log(data));
//emiting events
console.log("before removing event F and D");
myEmitter.emit("event-A", "A");
myEmitter.emit("event-B", "B");
myEmitter.emit("event-C", "C");
myEmitter.emit("event-D", "D");
myEmitter.emit("event-E", "E");
myEmitter.emit("event-F", "F");

//removing event F and D
myEmitter.removeListener("event-F", (data) => console.log(data));
myEmitter.removeAllListeners("event-D");

//after removing
console.log("After removing removing event F and D");

myEmitter.emit("event-A", "A");
myEmitter.emit("event-B", "B");

myEmitter.emit("event-C", "C");

myEmitter.emit("event-D", "D");
myEmitter.emit("event-E", "E");
myEmitter.emit("event-F", "F");

//myEmitter.emit('event-A')
