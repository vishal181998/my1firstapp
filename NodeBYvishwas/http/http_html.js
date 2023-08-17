const http = require('http');
const fs = require('fs');

//invoke create server module
//http exteds event module tthis is request listner
 const server = http.createServer((req,res)=>{
    // const html = fs.readFileSync("./index.html","utf-8")
    res.writeHead(200,{"Content-Type":"text/html"})
    //res.end("<h1>heloo hi</h1>hellowprl") 
    fs.createReadStream(__dirname+"/index.html").pipe(res)

   // res.end(html)
})

server.listen(3000,()=>{
    console.log("server running in port 3000")
})
