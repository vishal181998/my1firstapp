// console.log("hi")
// //using this we can store items in local staorge it will stored as key value pair
// localStorage.setItem("name","bob")
// //by thhis we can get item from the local storage if item exists then it will return value or else it will return null
// console.log(localStorage.getItem("name"))
// //to romove item from local staorage
// localStorage.removeItem("name")

// //localStorage.key
// //simialar like local storage adding item key valuue pair
// sessionStorage.setItem("name","jon")
// sessionStorage.setItem("nae","jon")
// //for geting item
// console.log(sessionStorage.getItem("name"))
// console.log(sessionStorage.getItem("nae"))

// //to remove item
// //sessionStorage.removeItem("name")
// console.log(sessionStorage.key(0))
// //number of items in the in session storage
// console.log(sessionStorage.length)
// //sessionStorage.clear()
// Create a new Date object with the desired expiration date
const expirationDate = new Date(2026, 1, 29);

// Convert the expiration date to a UTC string
const end = expirationDate.toUTCString();

console.log(end);

// Set the cookie with the name "name" and the expiration date
document.cookie = "name=den; expires=" + end;
console.log(document.cookie)