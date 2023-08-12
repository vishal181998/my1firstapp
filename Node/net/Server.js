const net = require('node:net');
const server = net.createServer((c) => {
  // 'connection' listener.
  console.log('client connected');
  c.on('end', () => {
    console.log('client disconnected');
  });
  c.write('hello\r\n'); //his line writes the string 'hello\r\n' to the client connection. The \r\n represents a newline character sequence in some operating systems.
 
  c.pipe(c); //method to create a duplex stream between the client connection c and itself (c). . A duplex stream allows data to be read from and written to the same stream. In this case, whatever data is written to the client connection c will be immediately echoed back to the client.
});
server.on('error', (err) => {
  throw err;
});
server.listen(8124, () => {
  console.log('server bound');
});
// server.close(()=>{
//   console.log("closee server connection")
// })
