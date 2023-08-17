const http = require('http');

//invoke create server module
//http exteds event module tthis is request listner
 const server = http.createServer((req,res)=>{
    const superhero ={
        firstname:"dead",
        lastname:"poool" 
      }
    res.writeHead(200)
    res.end(JSON.stringify(superhero));
 })

server.listen(3000,()=>{
    console.log("server running in port 3000")
})
