const child_process = require('child_process');
child_process.exec('first',(err,stuout,stuin)=>{
	console.log(stuout);
});