1-->The node:net module provides an asynchronous network API for creating 
stream-based TCP or IPC servers (net.createServer()) and clients 
(net.createConnection()).
2-->net.connect(), net.createConnection(), server.listen(), and socket.connect() take a path parameter to identify IPC endpoints.
3-->net.createConnection()# A factory function, which creates a new net.Socket, immediately initiates connection with socket.connect(), then returns the net.Socket that starts the connection.
When the connection is established, a 'connect' event will be emitted on the returned socket. The last parameter connectListener, if supplied, will be added as a listener for the 'connect' event once.
net.createConnection(options[, connectListener])
net.createConnection(path[, connectListener]) for IPC connections.
net.createConnection(port[, host][, connectListener]) for TCP connections.
4-->net.createServer([options][, connectionListener])

Class: net.Server Extends: <EventEmitter>
called by
new net.Server([options][, connectionListener])

Event: 'close'
Event: 'connection'
Event: 'error'
Event: 'listening'
Event: 'drop'
server.address() Returns the bound address, the address family name, and port of the server as reported by 
the operating system if listening on an IP socket
 (useful to find which port was assigned when getting an OS-assigned address): { port: 12346, family: 'IPv4', address: '127.0.0.1' }.


 server.close([callback])#
Added in: v0.1.90
callback <Function> Called when the server is closed.
Returns: <net.Server>