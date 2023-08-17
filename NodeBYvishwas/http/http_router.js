const http = require("http");

//invoke create server module
//http exteds event module tthis is request listner
const server = http.createServer((req, res) => {
    //req.method GET POst PUT DElete
  if (req.url === "/") {
    res.writeHead(200, { "Content-TYpe": "text/plane" });
    res.end("home page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-TYpe": "text/plane" });
    res.end("about page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-TYpe": "application/JSON" });
    res.end(
      JSON.stringify({
        firstname: "dead",
        lastname: "pool",
      })
    );
  } else {
    res.writeHead(404);
    res.end("page not found")
  }
});

server.listen(3000, () => {
  console.log("server running in port 3000");
});
