const fs= require('fs')
fs.readfile('diet.txt',(err,data)=>{
	console.log(data.toString())
});

