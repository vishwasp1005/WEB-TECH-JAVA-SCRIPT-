const http = require('http');
const server  = http.createServer((req,res)=>{
	res.end('hello world Hello');
});
server.listen(4000,()=>{
	console.log("server start");
});