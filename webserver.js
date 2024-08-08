const http = require('http');
const server  = http.createServer((req,res)=>{
	res.end('bliss waterpark');
});
server.listen(3000,()=>{
	console.log("server start");
});