// student-1 marks = 68
// student-2 marks = 85 student-3 marks = 71
// student-4 marks = 40
// resolve marks are between 70-90 reject marks are between 40-69
// (1) promise-all (2) promise-reject
// <-------------assignment1------------>
function markscheck(marks) {
    return new Promise((resolve, reject) => {
      if (marks >= 70 && marks <= 90) {
        resolve("good marks pass");
      } else if (marks >= 40 && marks <= 69) {
        reject("failed");
      } else {
        reject("invalid input");
      }
    });
  }
  
  const p1 = markscheck(88);
  const p2 = markscheck(90);
  const p3 = markscheck(66);
  const p4 = markscheck(9);
  
  Promise.all([p1, p2, p3, p4])
    .then((msgs) => console.log("Resolved: ", msgs))
    .catch((msg) => console.log("Rejected: ", msg));

//<-----------assignment2---------------->
// const p1 = new Promise((resolve) => setTimeout(resolve, 1000, 10));
// const p2 = new Promise((resolve) => setTimeout(resolve, 2000, 20));
// const p3 = new Promise((resolve) => setTimeout(resolve, 3000, 30));
// const p4 = new Promise((resolve, reject) => setTimeout(reject, 4000, 40));
// const p5 = new Promise((resolve) => setTimeout(resolve, 500, 50));
// const p6 = new Promise((resolve, reject) => setTimeout(reject, 600, 60));

// Promise.all([p5, p2, p3, p1, p6, p4])
//   .then((values) => {
//     console.log("Order in Promise.all:", values);
//   })
//   .catch((error) => {
//     console.error(" Error in Promise.all:", error);
//   });

// Promise.race([p1, p2, p3, p4, p5, p6])
//   .then((value) => {
//     console.log("(2) Result in Promise.race:", value);
//   })
//   .catch((error) => {
//     console.error("(2) Error in Promise.race:", error);
//   });

// Promise.any([p1, p2, p3, p4, p5, p6])
//   .then((value) => {
//     console.log("(3) Result in Promise.any:", value);
//   })
//   .catch((errors) => {
//     console.error("(3) Error in Promise.any:", errors);
//   });

// Promise.all([p1, p2, p3, p4, p5, p6])
//   .then((values) => {
//     console.log("(4) Order in Promise.all:", values);
//   })
//   .catch((error) => {
//     console.error("(4) Error in Promise.all:", error);
//   });
