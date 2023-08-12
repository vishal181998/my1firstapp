const url = require('url')
//parse ural sting to url
const urlString = 'https://www.example.com:8080/path?query=param#fragment';
const urlpase = url.parse(urlString,true)
// console.log(urlpase)
// console.log(urlpase.slashes)
// console.log(urlpase.protocol)
// console.log(urlpase.host)
// console.log(urlpase.href)
// console.log(urlpase.pathname)
// console.log(urlpase.port)
//url formating
const formatt= url.format({
    protocol: 'https:',
  slashes: true,
  auth: null,


  
  host: 'www.example.com:8080',
  port: '8080',
  hostname: 'www.example.com',
  hash: '#fragment',
  search: '?query=param',

})
console.log(formatt)