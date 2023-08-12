// The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

// let test = setTimeout(() => {
//   console.log("1sec dealy element");
// }, 1000); /// this will print items  after 1 sec
// /
//   for (let i = 1; i < 5; i++) {
//     setTimeout(
//       (x) => {
//         const currtime = new Date();
//         console.log(x, currtime.getSeconds());
//       },
//       1* 1000,i
//     );
//   }
// };
// console.log("this is test check:",day.getSeconds())
// printdealy(6);
// console.log("this is test check:",day.getSeconds())

// for(let i=0;i<6;i++){
//   setTimeout(() => {
//     const nw =new Date()
//     console.log(i,nw.getSeconds())
    
//   }, i*1000*i);
// }
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const printdealy = async function (num) {
//   const startTime = new Date().getSeconds();
//   console.log("Start Time:", startTime);

//   for (let i = 1; i <= num; i++) {
//     await delay(i * 1000);
//     const currentTime = new Date().getSeconds();
//     console.log("Callback -", i, "Executed after", currentTime - startTime, "seconds");
//   }
// };

// printdealy(6);

